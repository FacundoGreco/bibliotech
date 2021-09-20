import React from "react";
import { useCartContext } from "../Contexts/CartContext";
import "./CartWidget.scss";

export default function CartWidget() {
	const { getItemsQty } = useCartContext();

	return (
		<>
			{getItemsQty() > 0 && (
				<div className="cartWidget">
					<img className="cartButton" src={"https://i.ibb.co/vmrYNNp/cart.png"} alt={"Carrito"}></img>
					<p>{getItemsQty()}</p>
				</div>
			)}
		</>
	);
}
