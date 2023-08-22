import React from "react";

import TopNavBar from "../components/TopNavBar";
import Navbar from "../components/Navbar";
import HeaderWithCarousel from "../components/CarouselArea";
import HomeAndKitchen from "../components/Home&Kitchen";
import Toys from "../components/Toys";
import Gaming from "../components/Gaming";
import SmallForm from "../components/SmallForm";
import School from "../components/School";
import Electronics from "../components/Electronics";
import HealthAndPersonalCare from "../components/HealthAndPersonalCare";
import BeautyPicks from "../components/BeautyPicks";
import ProductItem from "../components/ProductItem";


export default function Home() {
	return (
		<React.Fragment>
			<TopNavBar />
			<Navbar />
			<main className="ml-[2rem] mr-[2rem] flex items-center justify-center flex-col">
				<HeaderWithCarousel />
				<div className="flex flex-row items-center justify-center gap-3 -mt-[20rem] z-30 mb-5">
					<Gaming />
					<Toys />
					<HomeAndKitchen />
					<div className="w-[350px] h-[470px] flex flex-col items-center justify-start gap-3 p-1">
						<SmallForm />
						<img
							className=" object-cover"
							src={
								"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
							}
							alt=""
						/>
					</div>
				</div>
				<div className="flex flex-row items-center justify-center gap-3 mb-5">
					<School />
					<Electronics />
					<HealthAndPersonalCare />
					<BeautyPicks />
				</div>
				<div className="flex flex-row items-center justify-center gap-3 mb-5 bg-white w-[78%] p-5">
					<ProductItem
						image={
							"https://m.media-amazon.com/images/I/418D4Ov+eNL._AC_SY200_.jpg"
						}
						deal={"Deal"}
						descrpiton={"Common Rhino FLEX 20.1"}
						last_price={"23.44"}
						main_price={"25.55"}
						percentage_off={41}
					/>
					<ProductItem
						image={
							"https://m.media-amazon.com/images/I/4188ByEdrgL._AC_SY200_.jpg"
						}
						deal={"Deal"}
						descrpiton={"Common Rhino FLEX 20.1"}
						last_price={"23.44"}
						main_price={"25.55"}
						percentage_off={41}
					/>
					<ProductItem
						image={
							"https://m.media-amazon.com/images/I/51pkSQAyLdL._AC_SY200_.jpg"
						}
						deal={"Deal"}
						descrpiton={"Common Rhino FLEX 20.1"}
						last_price={"23.44"}
						main_price={"25.55"}
						percentage_off={41}
					/>
					<ProductItem
						image={
							"https://m.media-amazon.com/images/I/418a4A32g-L._AC_SY200_.jpg"
						}
						deal={"Deal"}
						descrpiton={"Common Rhino FLEX 20.1"}
						last_price={"23.44"}
						main_price={"25.55"}
						percentage_off={41}
					/>
					<ProductItem
						image={
							"https://m.media-amazon.com/images/I/51VhdwgylML._AC_SY200_.jpg"
						}
						deal={"Deal"}
						descrpiton={"Common Rhino FLEX 20.1"}
						last_price={"23.44"}
						main_price={"25.55"}
						percentage_off={41}
					/>
					<ProductItem
						image={
							"https://m.media-amazon.com/images/I/31sQsvMAMXL._AC_SY200_.jpg"
						}
						deal={"Deal"}
						descrpiton={"Common Rhino FLEX 20.1"}
						last_price={"23.44"}
						main_price={"25.55"}
						percentage_off={41}
					/>
				</div>
			</main>
		</React.Fragment>
	);
}
