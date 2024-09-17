const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
	{
		name: String,
		email: String,
		sessions: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "SessionBooking",
			},
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Client", ClientSchema);
