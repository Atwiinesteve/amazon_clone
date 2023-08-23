import React from "react";
import ImageItem from "./ImageItem";

export default function ProductsContainerOnlyImages({ heading }) {
	return (
		<React.Fragment>
			<div className="flex flex-col items-start justify-center gap-3 mb-5 bg-white w-[78%] p-5">
				<div className="flex items-end justify-end m-2">
					<h4 className="font-bold text-xl text-gray-700">
						{heading}
					</h4>
				</div>
				<div className="flex items-center justify-center w-[100%]">
					<ImageItem
						image={
							"https://m.media-amazon.com/images/I/61VzSDlgfiL._AC_SY200_.jpg"
						}
					/>
					<ImageItem
						image={
							"https://m.media-amazon.com/images/I/61iPbqQvEHL._AC_SY200_.jpg"
						}
					/>
					<ImageItem
						image={
							"https://m.media-amazon.com/images/I/71eK0jULmVL._AC_SY200_.jpg"
						}
					/>
					<ImageItem
						image={
							"https://m.media-amazon.com/images/I/71n4aV-K8oL._AC_SY200_.jpg"
						}
					/>
					<ImageItem
						image={
							"https://m.media-amazon.com/images/I/71-GCIBN8wL._AC_SY200_.jpg"
						}
					/>
					<ImageItem
						image={
							"https://m.media-amazon.com/images/I/51nFUxdgIZL._AC_SY200_.jpg"
						}
					/>
					<ImageItem
						image={
							"https://m.media-amazon.com/images/I/41lnke7idrL._AC_SY200_.jpg"
						}
					/>
					<ImageItem
						image={
							"https://m.media-amazon.com/images/I/81fW7SLVgVL._AC_SY200_.jpg"
						}
					/>
				</div>
			</div>
		</React.Fragment>
	);
}
