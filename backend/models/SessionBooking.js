// models/SessionBooking.js
const mongoose = require("mongoose");

const SessionBookingSchema = new mongoose.Schema(
	{
		mentor: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor" },
		user: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
		sessionType: String,
		appointmentDate: Date,
	},
	{ timestamps: true }
);

module.exports = mongoose.model("SessionBooking", SessionBookingSchema);
