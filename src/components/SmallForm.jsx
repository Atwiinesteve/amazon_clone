import React from "react";

export default function SmallForm() {
	return (
		<React.Fragment>
			<div className="bg-white w-full h-[100px] pl-2 pr-2 flex flex-col justify-center items-center gap-2">
				<h2 className="font-bold text-xl">Sign in for the best experience</h2>
				<button className="bg-yellow-400 text-black text-sm capitalize w-full p-1 hover:bg-yellow-600 hover:cursor-pointer">
					sign in securely
				</button>
			</div>
		</React.Fragment>
	);
}
