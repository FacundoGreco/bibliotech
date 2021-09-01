import React from "react";
import Cart from "./Cart";
import "./CartContainer.scss";

export default function CartContainer() {
	return (
		<div className="cartContainer">
			<h2>Carrito</h2>
			<div className="cartSection">
				<Cart />
			</div>
		</div>
	);
}
