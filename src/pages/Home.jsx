import React from "react";

import TopNavBar from "../components/TopNavBar";
import Navbar from "../components/Navbar";
import HeaderWithCarousel from "../components/CarouselArea";
import School from "../components/School";
import Electronics from "../components/Electronics";
import HealthAndPersonalCare from "../components/HealthAndPersonalCare";
import BeautyPicks from "../components/BeautyPicks";
import ProductsContainer from "../components/ProductsContainer";
import ProductsContainerOnlyImages from "../components/ProductsContainerOnlyImages";
import CardParcel1 from "../components/CardParcel1";
import CardParcel2 from "../components/CardParcel2";
import PCImagesOnly from "../components/PCImagesOnly";
import KitchenOnlyImages from "../components/KitchenOnlyImages";
import Tools from "../components/Tools";
import Spring from "../components/Spring";
import EReaders from "../components/EReaders";
import PersonalisedRecommendations from "../components/PersonalisedRecommendatins";
import BackToTopBtn from "../components/BactToTopBtn";

export default function Home() {
	return (
		<React.Fragment>
			<TopNavBar />
			<Navbar />
			<main className="ml-[2rem] mr-[2rem] flex items-center justify-center flex-col">
				<HeaderWithCarousel />
				<CardParcel1 />
				<div className="flex flex-row items-center justify-center gap-3 mb-5">
					<School />
					<Electronics />
					<HealthAndPersonalCare />
					<BeautyPicks />
				</div>
				<ProductsContainer />
				<ProductsContainerOnlyImages
					heading={"Popular products in Beauty internationally"}
				/>
				<PCImagesOnly heading={"Popular products in PC internationally"} />
				<CardParcel2 />
				<KitchenOnlyImages heading={"International top sellers in Kitchen"} />
				<div className="flex flex-row items-center justify-center gap-3 mb-5">
					<Tools />
					<Spring />
					<EReaders />
					<BeautyPicks />
				</div>
				<PersonalisedRecommendations />
			</main>
			<BackToTopBtn />
		</React.Fragment>
	);
}
