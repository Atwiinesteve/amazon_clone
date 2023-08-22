import React from "react";
import TopNavBar from "../components/TopNavBar";
import Navbar from "../components/Navbar";
import HeaderWithCarousel from "../components/CarouselArea";
import HomeAndKitchen from "../components/Home&Kitchen";
import Toys from "../components/Toys";
import Gaming from "../components/Gaming";
import SmallForm from "../components/SmallForm";

export default function Home() {
	return (
		<React.Fragment>
			<TopNavBar />
			<Navbar />
			<main className="ml-[2rem] mr-[2rem]">
				<HeaderWithCarousel />
				<div className="flex flex-row items-center justify-center gap-3 -mt-[20rem] z-30">
					<Gaming />
					<Toys />
					<HomeAndKitchen />
					<div className="flex flex-col items-center justify-start gap-3">
						<SmallForm />
						<img className=" object-cover"
							src={
								"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
							}
							alt=""
						/>
					</div>
				</div>
			</main>
		</React.Fragment>
	);
}
