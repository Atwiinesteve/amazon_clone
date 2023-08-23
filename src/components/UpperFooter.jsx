import React from "react";
import FooterElements from "./FooterElements";

export default function UpperFooter() {
	return (
		<React.Fragment>
			<div className="w-[100vw] h-[400px] bg-gray-700 flex items-start justify-center flex-wrap pt-[5rem] gap-[3rem]">
				<FooterElements
					heading={"Get to Know Us"}
					links={[
						"Careers",
						"Blog",
						"About Amazon",
						"Investor Relations",
						"Amazon Devices",
						"Amazon Science",
					]}
				/>
				<FooterElements
					heading={"Make Money with Us"}
					links={[
						"Sell products on Amazon",
						"Sell on Amazon Business",
						"Sell apps on Amazon",
						"Become an Affiliate",
						"Advertise Your Products",
						"Self-Publish with Us",
						"Host an Amazon Hub",
						"See More Make Money with Us",
					]}
				/>
				<FooterElements
					heading={"Amazon Payment Products"}
					links={[
						"Amazon Business Card",
						"Shop with Points",
						"Reload Your Balance",
						"Amazon Currency Converter",
					]}
				/>
				<FooterElements
					heading={"Let Us Help You"}
					links={[
						"Amazon and COVID-19",
						"Your Account",
						"Your Orders",
						"Shipping Rates & Policies",
						"Returns & Replacements",
						"Manage Your Content and Devices",
						"Amazon Assistant",
						"Help",
					]}
				/>
			</div>
		</React.Fragment>
	);
}
