import React from "react";
import { Link } from "react-router-dom";
import "./GoToCart.scss";

export default function GoToCart() {
	return (
		<div className="goToCart">
			<p>Agregado al carrito!</p>
			<Link to="/cart">
				<button>Finalizar Compra</button>
			</Link>
		</div>
	);
}
