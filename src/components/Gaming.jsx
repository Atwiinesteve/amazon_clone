import React from 'react'
import { Link } from "react-router-dom";

export default function Gaming() {
  return (
		<React.Fragment>
			<div className="w-[350px] h-[450px] flex flex-col items-left justify-start bg-white p-1">
				<div className="mt-2 mb-4">
					<h2 className="font-instrument font-bold capitalize text-[1.4rem]">
						Gaming Accesories
					</h2>
				</div>
				<div className="flex flex-wrap items-center justify-center gap-8">
					<div className="flex items-left flex-col justify-center gap-2">
						<img
							className="w-[130px] h-[130px] object-cover"
							src={
								"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
							}
							alt=""
						/>
						<p className=" text-black text-sm">headsets</p>
					</div>
					<div className="flex items-left flex-col justify-center gap-2">
						<img
							className="w-[130px] h-[130px] object-cover"
							src={
								"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
							}
							alt=""
						/>
						<p className=" text-black text-sm">keyboards</p>
					</div>
					<div className="flex items-left flex-col justify-center gap-2">
						<img
							className="w-[130px] h-[130px] object-cover"
							src={
								"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
							}
							alt=""
						/>
						<p className=" text-black text-sm">computer mice</p>
					</div>
					<div className="flex items-left flex-col justify-center gap-2">
						<img
							className="w-[130px] h-[130px] object-cover"
							src={
								"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
							}
							alt=""
						/>
						<p className=" text-black text-sm">chairs</p>
					</div>
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
