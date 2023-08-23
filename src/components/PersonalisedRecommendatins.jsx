import React from 'react'
import { Link } from 'react-router-dom'

export default function PersonalisedRecommendations() {
  return (
		<React.Fragment>
			<div className="bg-white border border-t-gray-100 border-b-gray-100 border-t-2 pt-2 pb-2 w-full h-auto flex flex-col items-center justify-center gap-2">
				<p className="text-[13px] font-bold">See personlised recommendations</p>
				<button className="p-1 text-center text-black cursor-pointer bg-yellow-500 w-[300px] border border-yellow-700 rounded-sm font-bold text-[13px] hover:text-white">
					Sign in
				</button>
				<p className="text-sm">
					New customer?{" "}
					<Link className="text-blue-400 underline" to={"/register"}>
						Start here
					</Link>{" "}
				</p>
			</div>
		</React.Fragment>
	);
}
