import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import BooknowCard from "./BooknowCard";

const MentorIntroduction: React.FC = () => {
	return (
		<section className="w-full grid gap-10 grid-row md:grid-cols-[repeat(3,minmax(min-content,1fr))]  max-xl:flex max-xl:flex-col">
			<div className="bg-white  flex  items-center justify-between max-md:flex-col gap-5 md:gap-20 col-span-3 px-10 max-md:px-5 py-11 rounded-[40px]">
				<div className="max-w-2xl flex flex-col max-md:items-center">
					<p className="text-sm text-primary mb-5 font-semibold ">MENTOR</p>
					<h1 className="text-3xl text-secondary mb-3 font-bold">
						Chatur Ramlingam
					</h1>
					<p className="mb-7 max-md:text-center text-lg text-secondary">
						Lorem ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry&apos;s standard dummy
						text ever
					</p>
					<div className="flex gap-3 items-center">
						<span className="text-3xl text-secondary font-semibold">4.0</span>
						<svg
							className="mt-1"
							xmlns="http://www.w3.org/2000/svg"
							width="170"
							height="32"
							viewBox="0 0 170 32"
							fill="none"
						>
							<path
								d="M14.1186 5.21741C14.754 3.45534 17.246 3.45533 17.8814 5.21741L19.3953 9.41565C19.6733 10.1867 20.3937 10.71 21.2129 10.7362L25.6735 10.8787C27.5456 10.9385 28.3157 13.3085 26.8362 14.4573L23.3113 17.1945C22.6639 17.6971 22.3888 18.5439 22.617 19.3311L23.8599 23.6174C24.3816 25.4165 22.3655 26.8812 20.8158 25.8292L17.1233 23.3226C16.4452 22.8622 15.5548 22.8622 14.8767 23.3226L11.1843 25.8292C9.63447 26.8812 7.61839 25.4165 8.14006 23.6174L9.38295 19.3311C9.61122 18.5439 9.33608 17.6971 8.68871 17.1945L5.16376 14.4573C3.68428 13.3085 4.45435 10.9385 6.32654 10.8787L10.7871 10.7362C11.6063 10.71 12.3267 10.1867 12.6047 9.41565L14.1186 5.21741Z"
								fill="#7A1DC5"
							/>
							<path
								d="M84.9889 5.38702C85.4655 4.06546 87.3345 4.06547 87.8111 5.38702L89.325 9.58526C89.6725 10.549 90.5729 11.2032 91.5969 11.2359L96.0575 11.3784C97.4616 11.4233 98.0392 13.2008 96.9296 14.0624L93.4046 16.7995C92.5954 17.4279 92.2515 18.4864 92.5368 19.4704L93.7797 23.7567C94.171 25.106 92.6589 26.2045 91.4966 25.4155L87.8041 22.9089C86.9565 22.3334 85.8435 22.3334 84.9958 22.9089L81.3034 25.4155C80.1411 26.2045 78.629 25.106 79.0203 23.7567L80.2632 19.4704C80.5485 18.4864 80.2046 17.4279 79.3954 16.7995L75.8704 14.0624C74.7608 13.2008 75.3384 11.4233 76.7425 11.3784L81.2031 11.2359C82.2271 11.2032 83.1275 10.549 83.475 9.58527L84.9889 5.38702Z"
								fill="#7A1DC5"
								stroke="#7A1DC5"
							/>
							<path
								d="M49.3186 5.21741C49.954 3.45534 52.446 3.45533 53.0814 5.21741L54.5953 9.41565C54.8734 10.1867 55.5937 10.71 56.4129 10.7362L60.8735 10.8787C62.7457 10.9385 63.5157 13.3085 62.0363 14.4573L58.5113 17.1945C57.8639 17.6971 57.5888 18.5439 57.8171 19.3311L59.06 23.6174C59.5816 25.4165 57.5655 26.8812 56.0158 25.8292L52.3233 23.3226C51.6452 22.8622 50.7548 22.8622 50.0767 23.3226L46.3843 25.8292C44.8345 26.8812 42.8184 25.4165 43.3401 23.6174L44.583 19.3311C44.8112 18.5439 44.5361 17.6971 43.8887 17.1945L40.3638 14.4573C38.8843 13.3085 39.6544 10.9385 41.5265 10.8787L45.9871 10.7362C46.8063 10.71 47.5267 10.1867 47.8047 9.41565L49.3186 5.21741Z"
								fill="#7A1DC5"
							/>
							<path
								d="M118.573 6.0159C119.022 4.63328 120.978 4.63329 121.427 6.0159L122.563 9.5155C122.887 10.515 123.802 11.2049 124.852 11.2422L128.58 11.3745C129.943 11.4229 130.539 13.1182 129.507 14.0093L126.232 16.8347C125.51 17.4575 125.205 18.4365 125.446 19.3589L126.528 23.5052C126.887 24.8811 125.309 25.9378 124.173 25.0815L121.505 23.0692C120.614 22.3971 119.386 22.3971 118.495 23.0692L115.827 25.0815C114.691 25.9378 113.113 24.8811 113.472 23.5052L114.554 19.3589C114.795 18.4365 114.49 17.4575 113.768 16.8347L110.493 14.0093C109.461 13.1182 110.057 11.4229 111.42 11.3745L115.148 11.2422C116.198 11.2049 117.113 10.515 117.437 9.51549L118.573 6.0159Z"
								fill="#7A1DC5"
								stroke="#7A1DC5"
							/>
							<path
								d="M152.189 5.38702C152.666 4.06546 154.535 4.06547 155.011 5.38702L156.525 9.58526C156.873 10.549 157.773 11.2032 158.797 11.2359L163.258 11.3784C164.662 11.4233 165.239 13.2008 164.13 14.0624L160.605 16.7995C159.795 17.4279 159.452 18.4864 159.737 19.4704L160.98 23.7567C161.371 25.106 159.859 26.2045 158.697 25.4155L155.004 22.9089C154.156 22.3334 153.044 22.3334 152.196 22.9089L148.503 25.4155C147.341 26.2045 145.829 25.106 146.22 23.7567L147.463 19.4704C147.749 18.4864 147.405 17.4279 146.595 16.7995L143.07 14.0624C141.961 13.2008 142.538 11.4233 143.943 11.3784L148.403 11.2359C149.427 11.2032 150.328 10.549 150.675 9.58527L152.189 5.38702Z"
								stroke="#7A1DC5"
							/>
						</svg>
					</div>
				</div>
				<div className="flex-1 md:ml-20">
					<Avatar className="w-[160px] mx-auto h-[160px] mb-[30px] rounded-full">
						<AvatarImage src="/mentor photo.png" />
						<AvatarFallback>Mentor</AvatarFallback>
					</Avatar>
					<div className="flex gap-3 justify-center">
						<Image width={30} height={30} src="/youtube.png" alt="" />
						<Image width={30} height={30} src="/facebook.png" alt="" />
						<Image width={30} height={30} src="/linkedin.png" alt="" />
						<Image width={30} height={30} src="/twitter.png" alt="" />
					</div>
				</div>
			</div>

			<BooknowCard title="Agriculture" />
			<BooknowCard title="Carrier Mentorship" />
			<BooknowCard title="Research" />

			<div className="bg-white col-span-3  p-5 md:p-9 rounded-[40px]">
				<h2 className="text-3xl text-primary mt-3 font-bold mb-4 md:mt-7">About me</h2>
				<p className="text-lg text-secondary leading-[30px]">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularised in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum. t is a long established fact that a
					reader will be distracted by the readable content of a page when
					looking at its layout. The point of using Lorem Ipsum is that it has a
					more-or-less normal distribution of letters, as opposed to using
					'Content here, content here', making it look like readable English.
					Many desktop publishing packages and web page editors now use Lorem
					Ipsum as their default model text, and a search for 'lorem ipsum' will
					uncover many web sites still in their infancy. Various versions have
					evolved over the years, sometimes by accident, sometimes on purpose
					(injected humour and the like).
				</p>
			</div>
		</section>
	);
};

export default MentorIntroduction;
