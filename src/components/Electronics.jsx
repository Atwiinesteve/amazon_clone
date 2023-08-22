import React from 'react'
import { Link } from 'react-router-dom';

export default function Electronics() {
  return (
		<React.Fragment>
			<div className="w-[350px] h-[450px] flex flex-col items-left justify-start bg-white p-2">
				<div className="mt-2 mb-4">
					<h2 className="font-instrument font-bold capitalize text-[1.4rem]">
						Electronics
					</h2>
				</div>
				<div className="flex flex-wrap items-left justify-center">
					<img
						className="pl-3 pr-3 object-cover w-full h-[350px]"
						src={
							"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
						}
						alt=""
					/>
				</div>
				<Link
					to={"/see-more"}
					className=" text-green-500 underline-none mt-3 cursor-pointer">
					see more
				</Link>
			</div>
		</React.Fragment>
	);
}
