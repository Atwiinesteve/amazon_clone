import React from "react";
import KitchenImages from "./PCInternationally";

export default function KitchenOnlyImages({ heading }) {
	return (
		<React.Fragment>
			<div className="flex flex-col items-start justify-center gap-3 mb-5 bg-white w-[78%] p-5">
				<div className="flex items-end justify-end m-2">
					<h4 className="font-bold text-xl text-gray-700">{heading}</h4>
				</div>
				<div className="flex items-center justify-center w-[100%]">
					<KitchenImages
						image={
							"https://m.media-amazon.com/images/I/71RIXHSL-hL._AC_SY200_.jpg"
						}
					/>
					<KitchenImages
						image={
							"https://m.media-amazon.com/images/I/71vIcIzluEL._AC_SY200_.jpg"
						}
					/>
					<KitchenImages
						image={
							"https://m.media-amazon.com/images/I/71nhPE7vxHL._AC_SY200_.jpg"
						}
					/>
					<KitchenImages
						image={
							"https://m.media-amazon.com/images/I/5197ccJGQQL._AC_SY200_.jpg"
						}
					/>
					<KitchenImages
						image={
							"https://m.media-amazon.com/images/I/61pQMOIFVwL._AC_SY200_.jpg"
						}
					/>
					<KitchenImages
						image={
							"https://m.media-amazon.com/images/I/51gL1uEb9OL._AC_SY200_.jpg"
						}
					/>
					<KitchenImages
						image={
							"https://m.media-amazon.com/images/I/51sN5DQQoRL._AC_SY200_.jpg"
						}
					/>
					<KitchenImages
						image={
							"https://m.media-amazon.com/images/I/71SUcYRin4L._AC_SY200_.jpg"
						}
					/>
				</div>
			</div>
		</React.Fragment>
	);
}
