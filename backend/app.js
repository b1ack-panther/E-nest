// for prevent the website from spinnig down on render.com
const axios = require("axios")

const url = `https://e-nest-ufqm.onrender.com`; 
const interval = 30000;

function reloadWebsite() {
	axios
		.get(url)
		.then((response) => {
			console.log(
				`Reloaded at ${new Date().toISOString()}: Status Code ${
					response.status
				}`
			);
		})
		.catch((error) => {
			console.error(
				`Error reloading at ${new Date().toISOString()}:`,
				error.message
			);
		});
}

setInterval(reloadWebsite, interval);


//Project starts from here
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

app.get("/", (req, res) => {
	return res.status(200).json({ message: "E-nest app is running."})
})

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
