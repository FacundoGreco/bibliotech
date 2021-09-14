import React from "react";
import CheckoutForm from "./CheckoutForm.js";
import "./CheckoutContainer.scss";

export default function CheckoutContainer() {
	return (
		<div className="checkoutContainer">
			<h2>Checkout</h2>

			<div className="checkoutFormContainer">
				<CheckoutForm />
			</div>
		</div>
	);
}
