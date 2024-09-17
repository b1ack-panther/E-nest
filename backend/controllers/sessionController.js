const SessionBooking = require("../models/SessionBooking.js");
const Client = require("../models/Client.js");
const Mentor = require("../models/Mentor.js");
const nodemailer = require("nodemailer");

exports.bookSession = async (req, res) => {
	try {
		const { mentorId, client, sessionType, appointmentDate } = req.body;

		if (
			[mentorId, client.email, sessionType.name, appointmentDate].some(
				(field) => !field
			)
		) {
			return res.status(400).json({ error: "Provide all required fields." });
		}

		const mentor = await Mentor.findById(mentorId);
		if (!mentor) {
			return res.status(404).json({ error: "Mentor not found." });
		}

		let user = await Client.findOne({ email: client.email });
		if (!user) {
			user = new Client(client);
			await user.save();
		}

		const sessionBooking = new SessionBooking({
			mentor: mentorId,
			client: user._id,
			sessionType: sessionType.name,
			appointmentDate,
		});
		await sessionBooking.save();

		await Promise.all([
			Mentor.findByIdAndUpdate(mentorId, {
				$push: { sessions: sessionBooking._id },
			}),
			Client.findByIdAndUpdate(user._id, {
				$push: { sessions: sessionBooking._id },
			}),
		]);

		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		const formattedDate = new Intl.DateTimeFormat("en-IN", {
			day: "2-digit",
			month: "short",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			timeZoneName: "short",
		}).format(new Date(appointmentDate));

		const mailOptions = {
			to: user.email,
			subject: "Session Booking Confirmation",
			text: `Hello ${user.name},\n\nYour session has been booked successfully.\n\nDetails:\nSession Type: ${sessionType?.name}\nDate & Time: ${formattedDate}\n\nThank you!`,
		};

		const info = await transporter.sendMail(mailOptions);
		console.log(info);

		res.json({
			message: "Session booked successfully and confirmation email sent.",
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
