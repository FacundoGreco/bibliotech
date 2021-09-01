import React from "react";
import "./Cart.scss";

export default function Cart({ items }) {
	return (
		<div className="cart">
			<h3>Libros Agregados</h3>
			<div className="itemList">
				{/* {items &&
					items.map((item) => {
						<Item />;
					})} */}
			</div>
		</div>
	);
}
