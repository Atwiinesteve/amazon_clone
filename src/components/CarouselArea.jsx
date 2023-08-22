import React from "react";
import Carousel from "nuka-carousel";

export default function HeaderWithCarousel() {
	return (
		<React.Fragment>
			<div className="flex items-center justify-around">
				<Carousel autoplay wrapAround withoutControls className="-z-20">
					<>
						<div className="flex flex-row items-center justify-around bg-gradient-to-b from-indigo-200 pt-10">
							<div>
								<p>hello</p>
							</div>
							<img
								src={
									"https://images.unsplash.com/photo-1556910602-38f53e68e15d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbiUyMGl0ZW1zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
								}
								alt=""
							/>
						</div>
					</>

					<>
						<div className="flex flex-row items-center justify-around bg-gradient-to-b from-green-200 pt-10">
							<div>
								<p>hello</p>
							</div>
							<img
								src={
									"https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbiUyMGl0ZW1zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
								}
								alt=""
							/>
						</div>
					</>
					<>
						<div className="flex flex-row items-center justify-around bg-gradient-to-b from-pink-200 pt-10">
							<div>
								<p>hello</p>
							</div>
							<img
								src={
									"https://images.unsplash.com/photo-1452251889946-8ff5ea7b27ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2l0Y2hlbiUyMGl0ZW1zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
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
