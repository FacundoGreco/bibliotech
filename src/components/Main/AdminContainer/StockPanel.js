import React, { useState } from "react";
import { useBooksContext } from "../../Contexts/BooksContext";
import Item from "./Item";

import "./StockPanel.scss";

export default function StockPanel() {
	const { books, loadStock, updatingStock, stockUpdated, stockError } = useBooksContext();
	const [booksToSend, setBooksToSend] = useState([...books]);

	const changeStock = (id, stock) => {
		const booksCopy = [...booksToSend];

		booksCopy.find((book) => book.id === id).stock = stock;

		setBooksToSend(booksCopy);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		loadStock(booksToSend);
	};

	return (
		<form className="stockPanel" onSubmit={handleSubmit}>
			<h3>Stock</h3>

			{!stockError && !updatingStock && (
				<div className="itemList">
					{booksToSend &&
						booksToSend.map((book) => <Item key={book.id} book={book} changeStock={changeStock} />)}
				</div>
			)}

			{!stockError && updatingStock && <h4>Cargando stock...</h4>}

			{stockError && <h4>Se produjo un error al cargar stock.</h4>}

			{stockUpdated && <h4>Stock Cargado!</h4>}

			<button type="submit">Cargar Stock</button>
		</form>
	);
}
