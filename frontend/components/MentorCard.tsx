import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

type MentorCardProp = {
  color: string
}

const MentorCard: React.FC<MentorCardProp> = ({color}) => {
	return (
		<Card className="bg-white shadow-none min-w-[250px] w-full relative flex-1 rounded-[24px] overflow-hidden flex flex-col items-center">
			<CardHeader className="mt-16 p-0">
				<div className={`absolute -left-10 -right-10 top-0 h-72 ellipse`} style={{backgroundColor: color}}></div>
				<div className="absolute flex items-center gap-2 top-2 left-2 px-3 py-2 bg-zinc-500/20 rounded-2xl">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="16"
						viewBox="0 0 12 16"
						fill="none"
					>
						<path
							d="M4.25625 8.91429L4.9125 6.74286L3.1875 5.33333H5.325L6 3.2L6.675 5.33333H8.8125L7.06875 6.74286L7.725 8.91429L6 7.5619L4.25625 8.91429ZM1.5 16V10.1143C1.025 9.58095 0.65625 8.97143 0.39375 8.28571C0.13125 7.6 0 6.86984 0 6.09524C0 4.39365 0.58125 2.95238 1.74375 1.77143C2.90625 0.590476 4.325 0 6 0C7.675 0 9.09375 0.590476 10.2563 1.77143C11.4188 2.95238 12 4.39365 12 6.09524C12 6.86984 11.8688 7.6 11.6063 8.28571C11.3438 8.97143 10.975 9.58095 10.5 10.1143V16L6 14.4762L1.5 16ZM6 10.6667C7.25 10.6667 8.3125 10.2222 9.1875 9.33333C10.0625 8.44444 10.5 7.36508 10.5 6.09524C10.5 4.8254 10.0625 3.74603 9.1875 2.85714C8.3125 1.96825 7.25 1.52381 6 1.52381C4.75 1.52381 3.6875 1.96825 2.8125 2.85714C1.9375 3.74603 1.5 4.8254 1.5 6.09524C1.5 7.36508 1.9375 8.44444 2.8125 9.33333C3.6875 10.2222 4.75 10.6667 6 10.6667ZM3 13.7333L6 12.9524L9 13.7333V11.3714C8.5625 11.6254 8.09063 11.8254 7.58438 11.9714C7.07813 12.1175 6.55 12.1905 6 12.1905C5.45 12.1905 4.92188 12.1175 4.41563 11.9714C3.90938 11.8254 3.4375 11.6254 3 11.3714V13.7333Z"
							fill="#4C286A"
						/>
					</svg>
					<span className="text-xs font-medium text-[#4C286A]">Top Voice</span>
				</div>

				<div className="bg-white p-3 overflow-hidden z-10 rounded-full">
					<Avatar className="h-32 w-32 rounded-full">
						<AvatarImage src="mentor photo.png" alt="user" />
						<AvatarFallback>Mentor</AvatarFallback>
					</Avatar>
				</div>
			</CardHeader>

			<CardContent className="pt-4 pb-7 flex flex-col items-center text-center">
				<h3 className="font-semibold mb-1 text-xl text-black/80">
					Chatur Ramlingam
				</h3>
				<p className="text-base text-secondary  font-medium mb-4">
					Prof. at IITM
				</p>
				<p className="border border-[#8A8491] text-[#8A8491] text-[14px] px-[10px] py-1 font-medium -tracking-wide rounded-[14px]">
					10+ &nbsp;Experience
				</p>
			</CardContent>

			<CardFooter>
				<Button
					variant="default"
					className="px-12 py-3 w-auto h-auto rounded-[25px] hover:bg-purple-700/80 shadow-none font-bold text-base"
				>
					Know More
				</Button>
			</CardFooter>
		</Card>
	);
};

export default MentorCard;
