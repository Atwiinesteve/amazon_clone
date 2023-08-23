import React from "react";
import { Link } from "react-router-dom";

export default function CardComponent({ heading, image }) {
	return (
		<React.Fragment>
			<div className="w-[350px] h-auto flex flex-col items-left justify-start bg-white p-2">
				<div className="mt-2 mb-4">
					<h2 className="font-instrument font-bold capitalize text-[1.4rem]">
						{heading}
					</h2>
				</div>
				<div className="flex flex-wrap items-left justify-center">
					<img
						className="pl-3 pr-3 object-cover w-full h-[350px]"
						src={image}
						alt=""
					/>
				</div>
				<Link
					to={"/see-more"}
					className=" text-green-500 underline-none mt-3 ml-3 cursor-pointer">
					see more
				</Link>
			</div>
		</React.Fragment>
	);
}
