import React from "react";
import "./Item.scss";

export default function Item({ id, title, qty }) {
	return (
		<div className="item">
			<h5>{title}</h5>
			<p>{qty}</p>
		</div>
	);
}
