import React from 'react'
import ReviewCard from './ReviewCard';

const MentorshipImpact = () => {
  return (
		<section className="mt-[40px]">
			<h1 className="text-3xl font-semibold leading-relaxed text-primary mb-10 text-center">
				Impact of my mentorship
			</h1>
			<div className="flex max-xl:flex-col gap-5">
				<ReviewCard />
				<ReviewCard />
				<ReviewCard />
			</div>
		</section>
	);
}

export default MentorshipImpact