import React from 'react'
import MentorCard from "./MentorCard"

const MentorshipLiked = () => {
  return (
		<section className="mt-20 w-full ">
			<h1 className="text-3xl font-semibold leading-relaxed text-primary mb-10 text-center">
				People also liked their mentorship
			</h1>
			<div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-center">
				<MentorCard color="#e1d4e7" />
				<MentorCard color="#CCEBE9" />
				<MentorCard color="#DFECB4" />
				<MentorCard color="#F5C6C9" />
			</div>
		</section>
	);
}

export default MentorshipLiked