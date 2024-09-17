const Mentor = require("../models/Mentor");

exports.getMentorDetails = async (req, res) => {
  const id = req.params?.id;

  if (!id) {
    return res.status(401).json({error: "Mentor id not found"})
  }
	try {
		const mentor = await Mentor.findById(id).populate(
			"reviews.reviewer", "name"
		);
		res.json(mentor);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};


exports.createMentor = async (req, res) => {
	try {

    const {
			name,
			bio,
			rating,
			profession,
			experience,
			profile_img,
			social_links,
			sessionTypes,
			mentorshipDetail,
    } = req.body;
    
    if ([name, bio, profession, experience, profile_img, mentorshipDetail, sessionTypes, rating].some(field => !field)) {
      return res.status(403).json({error: "Provide required fields"})
    }


    const mentorData = {
			name,
			bio,
			profession,
			experience,
      profile_img,
      rating,
			social_links: {},
			sessionTypes,
			mentorshipDetail,
		};

    
		if (social_links?.youtube)
			mentorData.social_links.youtube = social_links.youtube;
		if (social_links?.twitter)
			mentorData.social_links.twitter = social_links.twitter;
		if (social_links?.facebook)
			mentorData.social_links.facebook = social_links.facebook;
		if (social_links?.linkedIn)
      mentorData.social_links.linkedIn = social_links.linkedIn;


    const mentor = new Mentor(mentorData);
		await mentor.save();

		res.status(201).json({
			message: "Mentor created successfully",
			mentor,
		});
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
