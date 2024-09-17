const mongoose = require("mongoose");

const MentorSchema = new mongoose.Schema(
	{
		name: String,
		bio: String,
		rating: Number,
		profession: String,
		experience: String,
		profile_img: String,
		social_links: {
			youtube: String,
			twitter: String,
			facebook: String,
			linkedIn: String,
		},
		sessions: [
			{
				client: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
				appointmentDateTime: Date,
				sessionType: String,
			},
		],
		sessionTypes: [
			{
				field: String,
				duration: Number,
				price: Number,
				discount: Number,
			},
		],
		mentorshipDetail: String,
		reviews: [
			{
				reviewer: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
				rating: Number,
				comment: String,
			},
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Mentor", MentorSchema);
