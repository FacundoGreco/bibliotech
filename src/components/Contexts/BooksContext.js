import React, { createContext, useContext, useEffect, useState } from "react";
import { getCategories, getBooks, setItemStock } from "../../model/model.js";

export const BooksContext = createContext();
export const useBooksContext = () => useContext(BooksContext);

export function BooksProvider({ children }) {
	//CATEGORIES AND BOOKS
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [categories, setCategories] = useState([]);
	const [books, setBooks] = useState([]);

	//STOCK
	const [stockError, setStockError] = useState(false);
	const [updatingStock, setUpdatingStock] = useState(false);
	const [stockUpdated, setStockUpdated] = useState(false);

	async function loadStock(booksToSend) {
		try {
			setUpdatingStock(true);
			setStockUpdated(false);

			await Promise.all(
				booksToSend.map(async (book) => {
					await setItemStock(book.id, book.stock);
				})
			);

			setUpdatingStock(false);
			setStockUpdated(true);
		} catch (err) {
			console.log(err.message);
			setUpdatingStock(false);
			setStockError(true);
		}
	}

	useEffect(() => {
		//GETS CATEGORIES FROM MODEL
		getCategories(setCategories).catch((err) => {
			console.log(err);
			setError(true);
		});

		//GETS BOOKS FROM MODEL
		getBooks(setBooks, setLoading).catch((err) => {
			console.log(err);
			setError(true);
		});
	}, []);

	return (
		<BooksContext.Provider
			value={{ loading, error, categories, books, loadStock, updatingStock, stockError, stockUpdated }}
		>
			{children}
		</BooksContext.Provider>
	);
}
