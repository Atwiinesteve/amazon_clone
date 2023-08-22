import React from "react";
import Carousel from "nuka-carousel";

export default function HeaderWithCarousel() {
	return (
		<React.Fragment>
			<div className="flex items-center justify-around">
				<Carousel autoplay wrapAround withoutControls className="-z-20">
					<>
						<div className="flex flex-row items-center justify-around pt-10">
							<img
								src={
									"https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
								}
								alt=""
							/>
						</div>
					</>

					<>
						<div className="flex flex-row items-center justify-around pt-10">
							<img
								src={
									"https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
								}
								alt=""
							/>
						</div>
					</>
					<>
						<div className="flex flex-row items-center justify-around pt-10">
							<img
								src={
									"https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg"
								}
								alt=""
							/>
						</div>
					</>
				</Carousel>
			</div>
		</React.Fragment>
	);
}
