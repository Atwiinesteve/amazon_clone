import React from 'react'
import { Link } from 'react-router-dom';

export default function School() {
  return (
		<React.Fragment>
			<div className="w-[350px] h-[470px] flex flex-col items-left justify-start bg-white p-2">
				<div className="mt-2 mb-4">
					<h2 className="font-instrument font-bold capitalize text-[1.4rem]">
						Shop school essentials
					</h2>
				</div>
				<div className="flex flex-wrap items-left justify-center">
					<img
						className="pl-3 pr-3 object-cover w-full h-[350px]"
						src={
							"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/BTS/Fuji_dash_BTS_1X._SY304_CB630084689_.jpg"
						}
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
