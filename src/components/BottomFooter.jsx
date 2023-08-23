import React from "react";
import FooterLink from "./FooterLink";
import { Link } from "react-router-dom";

const links = [
	{
		header: "Amazon Music",
		link: "Tortor orci venenatis cras metus? Amet ad habitant.",
	},
	{
		header: "Amazon Business",
		link: "Tortor orci venenatis cras metus? Amet ad habitant.",
	},
	{
		header: "Box Office Mojo",
		link: "Tortor orci venenatis cras metus? Amet ad habitant.",
	},
	{
		header: "IMDbPro",
		link: "Tortor orci venenatis cras metus? Amet ad habitant.",
	},
	{
		header: "Ring",
		link: "Tortor orci venenatis cras metus? Amet ad habitant.",
	},
	{
		header: "Amazon Advertising",
		link: "Tortor orci venenatis cras metus? Amet ad habitant.",
	},
	{
		header: "Amazon Global",
		link: "Tortor orci venenatis cras metus? Amet ad habitant.",
	},
	{
		header: "ComiXology",
		link: "Tortor orci venenatis cras metus? Amet ad habitant.",
	},
	{
		header: "	Kindle Direct Publishing",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
	{
		header: "eero WiFi",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
	{
		header: "6pm",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
	{
		header: "Home Services",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
	{
		header: "DPReview",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
	{
		header: "Prime Video Direct",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
	{
		header: "Blink",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
	{
		header: "AbeBooks",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
	{
		header: "Amazon Web Services",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
	{
		header: "Fabric",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
	{
		header: "Shopbop",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
	{
		header: "Neighbors App",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
	{
		header: "ACX",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
	{
		header: "Audible",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
	{
		header: "	Goodreads",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
	{
		header: "Woot!",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
	{
		header: "Amazon Subscription Boxes",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
	{
		header: "Sell on Amazon",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
	{
		header: "	Book Depository",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
	{
		header: "IMDb",
		link: "Tortor orci venenatis cras metus? Amet ad habitant",
	},
];

export default function BottomFooter() {
	return (
		<React.Fragment>
			<div className="flex flex-col items-center justify-center  bg-gray-800">
				<div
					className="w-[100vw] h-auto flex items-center justify-center flex-wrap gap-[2.5rem] font-poppins pr-[30rem] pl-[30rem]"
					style={{ paddingTop: "30px", paddingBottom: "30px" }}>
					{links.map(({ link, header }) => (
						<div className="w-[100px] h-auto" key={link}>
							<FooterLink link={link} header={header} />
						</div>
					))}
				</div>
				<div className="flex flex-col items-center justify-center mt-2 mb-3">
					<div className="text-white flex flex-row items-center justify-center gap-4">
						<Link className="text-sm hover:underline">Conditions of use</Link>
						<Link className="text-sm hover:underline">Privacy Notice</Link>
						<div>
							<Link className="text-sm hover:underline">Your Ads Privacy Choices</Link>
						</div>
					</div>
					<div>
						<p className="text-white text-sm">© 1996-2023, Amazon.com, Inc. or its affiliates</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
