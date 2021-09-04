import React from "react";
import { Link } from "react-router-dom";
import "./Book.scss";

export default function Book({ id, title, price, imgUrl }) {
	return (
		<li className="bookCard">
			<div className="bookCardHeader">
				<img src={imgUrl} alt="Carátula" />
				<h4>{title}</h4>
			</div>

			<div className="bookCardDetails">
				<Link to={`/book/${id}`}>
					<button>Ver descripción</button>
				</Link>

				<p>${price}</p>
			</div>
		</li>
	);
}
