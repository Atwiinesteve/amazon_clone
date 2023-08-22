import React from "react";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

export default function ProductsContainer() {
	return (
		<React.Fragment>
			<div className="flex flex-col items-start justify-center gap-3 mb-5 bg-white w-[78%] p-5">
				<div className="flex items-end justify-end m-2">
					<h4 className="font-bold text-xl text-gray-700">Exciting Deals</h4>
					<Link className="ml-2 text-blue-600  hover:underline" to={"/deals"}>See all deals</Link>
				</div>
				<div className="flex items-center justify-center w-[100%]">
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
			</div>
		</React.Fragment>
	);
}
