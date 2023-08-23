import React from "react";
import { Link } from "react-router-dom";

export default function FooterLink({ link, header }) {
	return (
		<React.Fragment>
			<div className="w-[120px] h-auto leading-4 flex flex-col items-start justify-center">
				<Link to={`/${header}`}>
					<span className="font-bold font-sans text-white hover:underline text-[12px]">{header}</span>
					<p className="font-light font-sans text-white hover:underline text-[12px]">{link}</p>
				</Link>
			</div>
		</React.Fragment>
	);
}
