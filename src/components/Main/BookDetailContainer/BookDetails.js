import React from "react";
import Counter from "./Counter";
import "./BookDetails.scss";

export default function BookDetails({ id, title, description, price, imgUrl, stock }) {
	return (
		<div className="bookDetails">
			<h3>{title}</h3>
			<div className="bookInfo">
				<div className="bookItemCard">
					<img src={imgUrl} alt="Carátula" />
					<div className="bookItemPurchase">
						<div className="addToCart">
							<Counter max={stock} />
							<button>Agregar al carrito</button>
						</div>

						<div className="priceAndStock">
							<p className="price">${price}</p>
							<p className="stock">{`Stock: ${stock}`}</p>
						</div>
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
