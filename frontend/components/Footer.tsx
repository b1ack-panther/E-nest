import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      
			<div className="bg-white mt-10 max-md:mt-5 p-12 md:p-16">
				<div className=" flex flex-col items-center gap-12 md:grid md:gap-16 lg:gap-40 md:grid-cols-2 lg:grid-cols-4 max-md:text-center">
					<div className="flex flex-col max-md:items-center gap-[70px] max-md:gap-10 w-full">
						<div className="flex flex-col max-md:items-center">
							<Image src="/e nest.png" width={200} height={45} alt="" />
							<p className="text-base tracking-tight mt-7 font-medium text-secondary">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							</p>
						</div>

						<div className="flex flex-col gap-3 whitespace-nowrap">
							<h3 className="font-semibold text-2xl">Contact With Us</h3>
							<Link
								href="#"
								className="font-medium text-secondary hover:text-primary"
							>
								Email
							</Link>
							<Link
								href="#"
								className="font-medium text-secondary hover:text-primary"
							>
								Talk to A Councellor
							</Link>
						</div>
					</div>

					<div className="w-full flex flex-col items-center md:items-end">
						<h3 className="font-semibold text-2xl mb-4">Brand and Security</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="#"
									className="text-gray-600 font-medium hover:text-primary text-base"
								>
									Report Concern
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-600 font-medium hover:text-primary text-base"
								>
									Report Security Issue
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-600 font-medium hover:text-primary text-base"
								>
									Trademark Notice
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-600 font-medium hover:text-primary text-base"
								>
									Advertise with us
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-600 font-medium hover:text-primary text-base"
								>
									Help & Support
								</Link>
							</li>
						</ul>
					</div>

					<div className="w-full flex flex-col max-md:items-center">
						<h3 className="font-semibold text-2xl mb-4">Company</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="#"
									className="text-gray-600 font-medium hover:text-primary text-base"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-600 font-medium hover:text-primary text-base"
								>
									Why choose us
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-600 font-medium hover:text-primary text-base"
								>
									Policies
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-600 font-medium hover:text-primary text-base"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-gray-600 font-medium hover:text-primary text-base"
								>
									Terms & Condition
								</Link>
							</li>
						</ul>
					</div>

					<div className="space-y-8 max-md:space-y-5 w-full flex flex-col max-md:items-center items-end">
						<h3 className="font-bold text-2xl whitespace-nowrap">
							Incubated by
						</h3>
						<Image src="/msme.png" alt="" width={150} height={70} />
						<Image src="/iima.png" alt="" width={150} height={70} />
					</div>
				</div>

				<div className="flex gap-7 justify-between max-md:flex-col items-center mt-10 md:mt-16">
					<div>
						<h3 className="text-primary text-2xl font-bold whitespace-nowrap">
							Lets get social:{" "}
						</h3>
						<div className="flex gap-3 mt-4">
							<Link href="#">
								<Image width={25} height={25} src="/instagram.png" alt="" />
							</Link>
							<Link href="#">
								<Image width={25} height={25} src="/youtube.png" alt="" />
							</Link>
							<Link href="#">
								<Image width={25} height={25} src="/facebook.png" alt="" />
							</Link>
							<Link href="#">
								<Image width={25} height={25} src="/telegram.png" alt="" />
							</Link>
							<Link href="#">
								<Image width={25} height={25} src="/linkedin.png" alt="" />
							</Link>
							<Link href="#">
								<Image width={25} height={25} src="/twitter.png" alt="" />
							</Link>
						</div>
					</div>
					<div className="flex items-center gap-10">
						<Image src="/app store.png" alt="" width={250} height={80}  className="max-md:w-32 h-auto"/>
						<Image src="/play store.png" alt="" width={250} height={80} className="max-md:w-32 h-auto" />
					</div>
				</div>
      </div>
      
			<div className="bg-[#3A1757] p-5 md:p-7">
				<p className="text-white max-md:text-sm text-center ">
					Copyrights &#169; AgriVision4U Pvt. Ltd. 2024
				</p>
			</div>
		</footer>
	);
};

export default Footer;
