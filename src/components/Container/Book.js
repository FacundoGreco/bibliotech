import React from "react";
import "./Book.scss";

export default function Book({ title, description, price, imgUrl }) {
	return (
		<li className="bookCard">
			<div className="bookHeader">
				<img src={imgUrl} alt="Carátula" />
				<h3>{title}</h3>
			</div>

			<div className="bookDetails">
				<button>Leer descripción</button>
				<p>${price}</p>
			</div>
		</li>
	);
}
