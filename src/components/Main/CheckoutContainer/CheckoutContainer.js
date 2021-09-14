import React from "react";
import { useCartContext } from "../../Contexts/CartContext";
import firebase from "firebase/app";
import CheckoutForm from "./CheckoutForm.js";
import { sendNewOrder } from "../../../model/model";
import "./CheckoutContainer.scss";

export default function CheckoutContainer() {
	const { clearCart, cartItems, getCartTotal } = useCartContext();

	const generateOrder = async (buyer) => {
		try {
			const items = cartItems.map((item) => {
				return { id: item.item.id, title: item.item.title, qty: item.qty, subtotal: item.subtotal };
			});

			const order = {
				buyer: { ...buyer },
				items: { ...items },
				date: firebase.firestore.Timestamp.fromDate(new Date()),
				total: getCartTotal(),
			};

			sendNewOrder(order);
			clearCart();
		} catch (error) {}
	};

	return (
		<div className="checkoutContainer">
			<h2>Checkout</h2>

			<div className="checkoutFormContainer">
				<CheckoutForm generateOrder={generateOrder} />
			</div>
		</div>
	);
}
