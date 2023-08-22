import React from "react";
import { Link } from "react-router-dom";

export default function HomeAndKitchen() {
	return (
		<React.Fragment>
			<div className="w-[350px] h-[450px] flex flex-col items-left justify-start bg-white p-2">
				<div className="mt-2 mb-4">
					<h2 className="font-instrument font-bold capitalize text-[1.4rem]">
						Home & Kitchen Under $30
					</h2>
				</div>
				<div className="flex flex-wrap items-left justify-center">
					<img
						className="pl-3 pr-3 object-cover w-full h-[350px]"
						src={
							"https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469391_2584745_379x304_1X_en_US._SY304_CB609304299_.jpg"
						}
						alt=""
					/>
				</div>
				<Link
					to={"/shop-more"}
					className=" text-green-500 underline-none mt-3 cursor-pointer">
					shop now
				</Link>
			</div>
		</React.Fragment>
	);
}
