import React from "react";

export default function ImageItem({
	image
}) {
	return (
		<React.Fragment>
			<div className="w-[400px] flex items-left justify-center flex-col">
				<img
					className="w-[200px] h-[200px] object-contain mb-2"
					src={image}
					alt=""
				/>
			</div>
		</React.Fragment>
	);
}
