import React from "react";

import HomeAndKitchen from "./Home&Kitchen";
import Toys from "./Toys";
import Gaming from "./Gaming";

export default function CardParcel2() {
	return (
		<React.Fragment>
			<div className="flex flex-row items-center justify-center gap-3 z-30 mb-5">
				<Gaming />
				<Toys />
				<HomeAndKitchen />
				<HomeAndKitchen />
			</div>
		</React.Fragment>
	);
}
