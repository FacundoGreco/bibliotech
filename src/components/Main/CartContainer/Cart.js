import React from "react";
import { useCartContext } from "../../Contexts/CartContext";
import Item from "./Item";
import "./Cart.scss";

export default function Cart() {
	const { clearCart, cartItems } = useCartContext();

	const handlePay = (e) => {
		e.preventDefault();
	};

	return (
		<div className="cart">
			<h3>Libros Agregados</h3>
			<div className="itemList">
				<div className="columns">
					<h4>Título</h4>
					<h4>Cantidad</h4>
				</div>
				{cartItems &&
					cartItems.map((item) => (
						<Item key={item.item.id} id={item.item.id} title={item.item.title} qty={item.qty} />
					))}
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
