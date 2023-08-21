import React from "react";
import {HiBars3} from "react-icons/hi2"

export default function Navbar() {
	return (
		<React.Fragment>
			<nav className="w-full h-[30px] flex items-center justify-start font-instrument bg-slate-800 p-5">
				<ul className="flex items-center justify-center gap-5 text-white">
					<li className="flex items-center justify-around gap-1 hover:cursor-pointer hover:border hover:border-white p-2">
						<HiBars3 />
						<span>All</span>
					</li>
					<li className="hover:cursor-pointer hover:border hover:border-white p-2">
						Today's Deals
					</li>
					<li className="hover:cursor-pointer hover:border hover:border-white p-2">
						Customer Service
					</li>
					<li className="hover:cursor-pointer hover:border hover:border-white p-2">
						Registry
					</li>
					<li className="hover:cursor-pointer hover:border hover:border-white p-2">
						Gift Cards
					</li>
					<li className="hover:cursor-pointer hover:border hover:border-white p-2">
						Sell
					</li>
				</ul>
			</nav>
		</React.Fragment>
	);
}
