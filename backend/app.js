const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const mentorController = require("./controllers/mentorController");
const sessionController = require("./controllers/sessionController");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/mentor/:id", mentorController.getMentorDetails);
app.post("/mentor", mentorController.createMentor)

app.post("/bookSession", sessionController.bookSession);

const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
			console.log("MongoDB connected");
		});
	})
	.catch((err) => console.log(err));
