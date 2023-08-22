import React from "react";

export default function ProductItem({
	image,
	percentage_off,
	deal,
	main_price,
	last_price,
	descrpiton,
}) {
	return (
		<React.Fragment>
			<div className="w-[400px] flex items-left justify-center flex-col">
				<img className="w-[200px] h-[200px] object-contain mb-2" src={image} alt="" />
				<div id="deals" className="flex items-center mt-1 mb-1">
					<span className="pt-1 pb-1 pl-2 pr-2 text-white bg-red-600 font-bold text-[12px] mr-3">
						{percentage_off}% off
					</span>
					<p className="text-red-600 font-bold">{deal}</p>
				</div>
				<div id="prices" className="flex items-center">
					<p className="text-[20px] text-gray-600">
						{" "}
						<sup>$</sup> {main_price}
					</p>
					<div className="flex items-end justify-start">
						<p className="text-[12px] font-light mr-1 text-gray-500">
							Last price
						</p>
						<p className="text-[12px] line-through font-light text-gray-500">
							${last_price}
						</p>
					</div>
				</div>
				<div id="description">
					<p>{descrpiton}</p>
				</div>
			</div>
		</React.Fragment>
	);
}
