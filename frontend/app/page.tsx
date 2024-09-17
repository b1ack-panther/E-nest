import MentorIntroduction from "@/components/MentorIntroduction";
import MentorshipImpact from "@/components/MentorshipImpact";
import MentorshipLiked from "@/components/MentorshipLiked";

export default function Home() {
	
	return (
		<div className="bg-[#490f7817]  min-h-[calc(100vh-80px)] w-full px-[5vw] max-md:px-5 max-md:py-5 py-10  flex flex-col gap-[40px] items-center">
			<MentorIntroduction />
			<MentorshipImpact />
			<MentorshipLiked />
		</div>
	);
}
