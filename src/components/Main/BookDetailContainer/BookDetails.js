import React from "react";
import Counter from "./Counter";
import "./BookDetails.scss";

export default function BookDetails({ id, title, description, price, imgUrl }) {
	return (
		<div className="bookDetails">
			<h3>{title}</h3>
			<div className="bookInfo">
				<div className="bookItemCard">
					<img src={imgUrl} alt="Carátula" />
					<div className="bookItemPurchase">
						<div className="addToCart">
							<Counter />
							<button>Agregar al carrito</button>
						</div>

						<p>${price}</p>
					</div>
				</div>
				<div className="bookDescription">
					<h4>Descripción</h4>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
}
