import React from "react";

import HomeAndKitchen from "./Home&Kitchen";
import Toys from "./Toys";
import Gaming from "./Gaming";
import SmallForm from "./SmallForm";

export default function CardParcel1() {
	return (
		<React.Fragment>
			<div className="flex flex-row items-center justify-center gap-3 -mt-[20rem] z-30 mb-5">
				<Gaming />
				<Toys />
				<HomeAndKitchen />
				<div className="w-[350px] h-[470px] flex flex-col items-center justify-start gap-3 p-1">
					<SmallForm />
					<img
						className=" object-cover"
						src={
							"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
						}
						alt=""
					/>
				</div>
			</div>
		</React.Fragment>
	);
}
