import React, { useState } from "react";
import { useCartContext } from "../../Contexts/CartContext";
import firebase from "firebase/app";
import NoItemsAdded from "../CartContainer/NoItemsAdded";
import CheckoutForm from "./CheckoutForm.js";
import Order from "./Order.js";
import { sendNewOrder } from "../../../model/model";
import "./CheckoutContainer.scss";

export default function CheckoutContainer() {
	const { getItemsQty, clearCart, cartItems, getCartTotal } = useCartContext();

	const [sendingOrder, setSendingOrder] = useState(false);
	const [error, setError] = useState(false);

	const [orderPayed, setOrderPayed] = useState(false);
	const [orderId, setOrderId] = useState("");

	const generateOrder = async (buyer) => {
		try {
			setSendingOrder(true);

			const items = cartItems.map((item) => {
				return { id: item.item.id, title: item.item.title, qty: item.qty, subtotal: item.subtotal };
			});

			const order = {
				buyer: { ...buyer },
				items: { ...items },
				date: firebase.firestore.Timestamp.fromDate(new Date()),
				total: getCartTotal(),
			};

			await sendNewOrder(order, setOrderId);

			setSendingOrder(false);
			clearCart();
			setOrderPayed(true);
		} catch (error) {
			setError(true);
		}
	};

	return (
		<div className="checkoutContainer">
			<h2>Checkout</h2>

			<div className="checkoutFormContainer">
				{/* IF CART IS NOT EMPTY SHOW CHECKOUT FORM */}
				{getItemsQty() > 0 && !sendingOrder && <CheckoutForm generateOrder={generateOrder} />}

				{/* NOTIFIES IF ORDER IS BEING SENT OR ERROR OCURRED */}
				{sendingOrder && <h3>Enviando orden...</h3>}
				{error && <h3>Se produjo un error al enviar la órden.</h3>}

				{/* CHECKS IF ORDER IS PAYED OR CART IS EMPTY */}
				{getItemsQty() === 0 && (orderPayed ? <Order orderId={orderId} /> : <NoItemsAdded />)}
			</div>
		</div>
	);
}
