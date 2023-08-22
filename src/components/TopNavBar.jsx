import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";

export default function TopNavBar() {
	return (
		<React.Fragment>
			<nav className="bg-black flex items-center justify-around w-full h-[70px] font-instrument">
				<div id="logo">
					<img
						className="w-[140px] h-[50px] object-cover"
						src={
							"https://tse1.mm.bing.net/th?id=OIP.WbPie4u7yZ8Pht7AEY67HwAAAA&pid=Api&P=0&h=180"
						}
						alt="amazon logo"
					/>
				</div>
				<div
					id="location"
					className="flex flex-row text-white items-center justify-around gap-3">
					<SlLocationPin />
					<div className="flex flex-col items-left justify-center">
						<p>Deliver to</p>
						<span className="font-bold -mt-2">
							<p>Kenya</p>
						</span>
					</div>
				</div>
				<div id="input" className="flex flex-row items-center justify-center">
					<select className="pt-2 pb-2 pl-2 pr-2 w-auto h-auto flex items-center font-instrument capitalize text-[13px] border-r-1 border-gray-400 outline-none cursor-pointer tracking-tighter bg-gray-200 rounded-l-sm">
						<option value="all">all departments</option>
					</select>
					<input
						type="text"
						className="w-[1000px] p-[0.3rem] outline-none border-l border-l-gray"
						placeholder="Search Amazon"
					/>
					<div className="flex items-center justify-center bg-orange-300 p-[0.56rem]">
						<BsSearch />
					</div>
				</div>
				<div id="language" className="flex items-center justify-center">
					<img
						className="w-[25px] h-[20px] object-cover"
						src={
							"https://tse4.mm.bing.net/th?id=OIP.rTt1sY10eg1AC3YFoQI9OgHaEf&pid=Api&P=0&h=180"
						}
						alt="flag"
					/>
					<div>
						<select className="uppercase bg-black text-white flex items-center font-bold outline-none">
							<option value="en">en</option>
						</select>
					</div>
				</div>
				<div
					id="signin"
					className="flex flex-col items-left justify-around pt-1 pb-1">
					<p className="text-white text-[12px]">Hello, sign in</p>
					<div className="flex items-center justify-center">
						<select className="capitalize font-semibold bg-black text-white outline-none">
							<option value="lists">Accounts & Lists</option>
						</select>
					</div>
				</div>
				<div id="orders" className="flex items-left flex-col justify-center">
					<p className="text-[13px] text-white capitalize">returns</p>
					<p className="text-[15px] text-white font-bold">& Orders</p>
				</div>
				<div id="cart" className="relative flex items-end justify-around">
					<span className="absolute -top-[1px] left-3 text-[10px] w-[15px] h-[15px] bg-white text-orange-500 flex items-center justify-center rounded-full font-bold">0</span>
					<BsCart3 color="white" fontSize={35} />
					<p className="text-white text-[15px] capitalize font-bold">Cart</p>
				</div>
			</nav>
		</React.Fragment>
	);
}
