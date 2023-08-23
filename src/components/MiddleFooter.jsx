import React from "react";
import { BsGlobe2 } from "react-icons/bs";

export default function MiddleFooter() {
	return (
		<React.Fragment>
			<div className="w-[100vw] h-[100px] bg-gray-700 flex items-center justify-center flex-wrap gap-[3rem] font-poppins border border-t-slate-500 border-b-0 border-r-0 border-l-0">
				<img
					className="w-[80px] h-[80px] object-contain "
					src={"https://pngimg.com/uploads/amazon/amazon_PNG11.png"}
					alt=""
				/>
				<div className="ml-9 flex items-center justify-center gap-3">
					<div
						id="language"
						className="flex items-center justify-center border border-white p-2 cursor-pointer">
						<BsGlobe2 color="white" />
						<p className="text-sm text-white ml-3">English</p>
					</div>
					<div
						className="flex items-center justify-center border border-white p-2 cursor-pointer"
						id="currency">
						<span className="text-white text-sm mr-1">$</span>
						<p className="text-white text-sm">USD - U.S Dollar</p>
					</div>
					<div
						id="country"
						className="flex items-center justify-center border border-white p-2 cursor-pointer">
						<img
							className="w-[20px] h-[20px] object-contain "
							src={
								"https://tse4.mm.bing.net/th?id=OIP.rTt1sY10eg1AC3YFoQI9OgHaEf&pid=Api&P=0&h=180"
							}
							alt=""
						/>
						<p className="text-white text-sm ml-3">United States</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
