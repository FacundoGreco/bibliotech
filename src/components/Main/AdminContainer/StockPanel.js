import React, { useState } from "react";
import { useBooksContext } from "../../Contexts/BooksContext";
import Item from "./Item";

import "./StockPanel.scss";

export default function StockPanel() {
	const { books, loadStock } = useBooksContext();
	const [booksToSend, setBooksToSend] = useState([...books]);

	const changeStock = (id, stock) => {
		const booksCopy = [...booksToSend];

		booksCopy.find((book) => book.id === id).stock = stock;

		setBooksToSend(booksCopy);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		try {
			loadStock(booksToSend);
		} catch (error) {}
	};

	return (
		<form className="stockPanel" onSubmit={handleSubmit}>
			<h3>Stock</h3>
			<div className="itemList">
				{booksToSend && booksToSend.map((book) => <Item key={book.id} book={book} changeStock={changeStock} />)}
			</div>

			<button type="submit">Cargar Stock</button>
		</form>
	);
}