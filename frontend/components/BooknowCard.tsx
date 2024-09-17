
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

type BooknowCardProps = {
	title: string;
};

const BooknowCard : React.FC<BooknowCardProps>= ({title}) => {
  return (
		<Card className={`bg-white p-5 md:p-9 shadow-none rounded-[40px]`}>
			<CardHeader className="p-0 mt-1 mb-4 ">
				<CardTitle className="font-bold text-4xl text-secondary whitespace-nowrap">
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent className="p-0 mb-10">
				<p className="text-lg mb-4 font-medium text-gray-600">
					Duration 45 min
				</p>
				<p className="text-sm font-medium">
					<span className="line-through mr-2 text-muted-foreground/80">
						₹1000
					</span>
					<span className="text-green-600">40% off</span>
				</p>
			</CardContent>
			<CardFooter className="flex p-0 justify-between items-center">
				<Button
					className={`rounded-[40px] h-auto shadow-none transition-all duration-300 p-3 w-full flex justify-between gap-5 ${
						title === "Agriculture"
							? "bg-[#F5C6C9] hover:bg-[#f7b6bb]"
							: title === "Research"
							? "bg-[#CCEBE9] hover:bg-[#8ed4d0]"
							: "bg-[#DFECB4] hover:bg-[#bfd280]"
					}`}
				>
					<div className="flex text-[#4C286A] gap-3 items-center ml-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="26"
							viewBox="0 0 24 26"
							fill="none"
						>
							<path
								d="M2.66667 26C1.93333 26 1.30556 25.7454 0.783333 25.2362C0.261111 24.7271 0 24.115 0 23.4V5.2C0 4.485 0.261111 3.87292 0.783333 3.36375C1.30556 2.85458 1.93333 2.6 2.66667 2.6H4V0H6.66667V2.6H17.3333V0H20V2.6H21.3333C22.0667 2.6 22.6944 2.85458 23.2167 3.36375C23.7389 3.87292 24 4.485 24 5.2V23.4C24 24.115 23.7389 24.7271 23.2167 25.2362C22.6944 25.7454 22.0667 26 21.3333 26H2.66667ZM2.66667 23.4H21.3333V10.4H2.66667V23.4ZM2.66667 7.8H21.3333V5.2H2.66667V7.8ZM12 15.6C11.6222 15.6 11.3056 15.4754 11.05 15.2262C10.7944 14.9771 10.6667 14.6683 10.6667 14.3C10.6667 13.9317 10.7944 13.6229 11.05 13.3737C11.3056 13.1246 11.6222 13 12 13C12.3778 13 12.6944 13.1246 12.95 13.3737C13.2056 13.6229 13.3333 13.9317 13.3333 14.3C13.3333 14.6683 13.2056 14.9771 12.95 15.2262C12.6944 15.4754 12.3778 15.6 12 15.6ZM6.66667 15.6C6.28889 15.6 5.97222 15.4754 5.71667 15.2262C5.46111 14.9771 5.33333 14.6683 5.33333 14.3C5.33333 13.9317 5.46111 13.6229 5.71667 13.3737C5.97222 13.1246 6.28889 13 6.66667 13C7.04445 13 7.36111 13.1246 7.61667 13.3737C7.87222 13.6229 8 13.9317 8 14.3C8 14.6683 7.87222 14.9771 7.61667 15.2262C7.36111 15.4754 7.04445 15.6 6.66667 15.6ZM17.3333 15.6C16.9556 15.6 16.6389 15.4754 16.3833 15.2262C16.1278 14.9771 16 14.6683 16 14.3C16 13.9317 16.1278 13.6229 16.3833 13.3737C16.6389 13.1246 16.9556 13 17.3333 13C17.7111 13 18.0278 13.1246 18.2833 13.3737C18.5389 13.6229 18.6667 13.9317 18.6667 14.3C18.6667 14.6683 18.5389 14.9771 18.2833 15.2262C18.0278 15.4754 17.7111 15.6 17.3333 15.6ZM12 20.8C11.6222 20.8 11.3056 20.6754 11.05 20.4262C10.7944 20.1771 10.6667 19.8683 10.6667 19.5C10.6667 19.1317 10.7944 18.8229 11.05 18.5737C11.3056 18.3246 11.6222 18.2 12 18.2C12.3778 18.2 12.6944 18.3246 12.95 18.5737C13.2056 18.8229 13.3333 19.1317 13.3333 19.5C13.3333 19.8683 13.2056 20.1771 12.95 20.4262C12.6944 20.6754 12.3778 20.8 12 20.8ZM6.66667 20.8C6.28889 20.8 5.97222 20.6754 5.71667 20.4262C5.46111 20.1771 5.33333 19.8683 5.33333 19.5C5.33333 19.1317 5.46111 18.8229 5.71667 18.5737C5.97222 18.3246 6.28889 18.2 6.66667 18.2C7.04445 18.2 7.36111 18.3246 7.61667 18.5737C7.87222 18.8229 8 19.1317 8 19.5C8 19.8683 7.87222 20.1771 7.61667 20.4262C7.36111 20.6754 7.04445 20.8 6.66667 20.8ZM17.3333 20.8C16.9556 20.8 16.6389 20.6754 16.3833 20.4262C16.1278 20.1771 16 19.8683 16 19.5C16 19.1317 16.1278 18.8229 16.3833 18.5737C16.6389 18.3246 16.9556 18.2 17.3333 18.2C17.7111 18.2 18.0278 18.3246 18.2833 18.5737C18.5389 18.8229 18.6667 19.1317 18.6667 19.5C18.6667 19.8683 18.5389 20.1771 18.2833 20.4262C18.0278 20.6754 17.7111 20.8 17.3333 20.8Z"
								fill="#4C286A"
							/>
						</svg>
						<span className="text-2xl font-medium">Book now</span>
					</div>
					<div className="font-bold text-[#4C286A] rounded-[40px] border border-[#4C286A] flex gap-3 items-center p-2">
						<span className="text-2xl font-medium">₹600</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
						>
							<path
								d="M15.2187 8.8125L8.21875 2.1625L10 0.499999L20 10L10 19.5L8.21875 17.8375L15.2187 11.1875L1.18065e-06 11.1875L9.73018e-07 8.8125L15.2187 8.8125Z"
								fill="#4C286A"
							/>
						</svg>
					</div>
				</Button>
			</CardFooter>
		</Card>
	);
}

export default BooknowCard