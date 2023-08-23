import React from "react";
import PCInternationally from "./PCInternationally";

export default function PCImagesOnly({ heading }) {
	return (
		<React.Fragment>
			<div className="flex flex-col items-start justify-center gap-3 mb-5 bg-white w-[78%] p-5">
				<div className="flex items-end justify-end m-2">
					<h4 className="font-bold text-xl text-gray-700">{heading}</h4>
				</div>
				<div className="flex items-center justify-center w-[100%]">
					<PCInternationally
						image={
							"https://m.media-amazon.com/images/I/41ZrtojinRL._AC_SY200_.jpg"
						}
					/>
					<PCInternationally
						image={
							"https://m.media-amazon.com/images/I/51Brl+iYtvL._AC_SY200_.jpg"
						}
					/>
					<PCInternationally
						image={
							"https://m.media-amazon.com/images/I/61f6AWkfMhL._AC_SY200_.jpg"
						}
					/>
					<PCInternationally
						image={
							"https://m.media-amazon.com/images/I/81arw1UlcrS._AC_SY200_.jpg"
						}
					/>
					<PCInternationally
						image={
							"https://m.media-amazon.com/images/I/41GIiqzzEPL._AC_SY200_.jpg"
						}
					/>
					<PCInternationally
						image={
							"https://m.media-amazon.com/images/I/81tVtJijo0L._AC_SY200_.jpg"
						}
					/>
					<PCInternationally
						image={
							"https://m.media-amazon.com/images/I/81RLQPJ83uL._AC_SY200_.jpg"
						}
					/>
					<PCInternationally
						image={
							"https://m.media-amazon.com/images/I/41a2jzudKtL._AC_SY200_.jpg"
						}
					/>
				</div>
			</div>
		</React.Fragment>
	);
}
