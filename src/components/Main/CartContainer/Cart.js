import React from "react";
import "./Cart.scss";
import { useCartContext } from "../../Contexts/CartContext";

export default function Cart({ items }) {
	const { clearCart } = useCartContext();

	const handlePay = (e) => {
		e.preventDefault();
	};

	return (
		<div className="cart">
			<h3>Libros Agregados</h3>
			<div className="itemList">
				{/* {items &&
					items.map((item) => {
						<Item />;
					})} */}
			</div>

			<div className="cartButtons">
				<button type="reset" onClick={clearCart}>
					Limpiar
				</button>
				<button type="submit" onClick={handlePay}>
					Pagar
				</button>
			</div>
		</div>
	);
}
