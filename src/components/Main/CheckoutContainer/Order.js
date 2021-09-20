import React from "react";
import { Link } from "react-router-dom";
import "./Order.scss";

export default function Order({ orderId }) {
	return (
		<div className="order">
			<h3>La orden ha sido enviada!</h3>
			<p>CÓDIGO DE ORDEN: {orderId}</p>
			<Link to="/">
				<button>INICIO</button>
			</Link>
		</div>
	);
}
