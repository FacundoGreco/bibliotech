import React from "react";
import { useCartContext } from "../Contexts/CartContext";
import "./CartWidget.scss";

export default function CartWidget() {
	const { itemsQty } = useCartContext();

	return (
		<>
			{itemsQty > 0 && (
				<div className="cartWidget">
					<img className="cartButton" src={"https://i.ibb.co/vmrYNNp/cart.png"} alt={"Carrito"}></img>
					<p>{itemsQty}</p>
				</div>
			)}
		</>
	);
}
