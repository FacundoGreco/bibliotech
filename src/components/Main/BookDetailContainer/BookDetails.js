import React, { useState } from "react";
import { useCartContext } from "../../Contexts/CartContext";
import DetailsCounter from "./DetailsCounter";
import GoToCart from "./GoToCart";
import "./BookDetails.scss";

export default function BookDetails({ book }) {
	const { title, description, price, imgUrl, stock } = book;
	const { addItem, isInCart } = useCartContext();

	const [itemAdded, setItemAdded] = useState(isInCart(book.id));

	const handleAddItem = (qty) => {
		addItem(book, qty);
		setItemAdded(true);
	};

	return (
		<div className="bookDetails">
			<h3>{title}</h3>
			<div className="bookInfo">
				<div className="bookItemCard">
					<img src={imgUrl} alt="Carátula" />
					<div className="bookItemPurchase">
						{/* CHECKS IF ITEM IS ADDED TO CART */}
						{!itemAdded ? <DetailsCounter max={stock} handleAddItem={handleAddItem} /> : <GoToCart />}

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
