import React, { createContext, useContext, useEffect, useState } from "react";
import { getCategories, getBooks, setItemStock } from "../../model/model.js";

export const BooksContext = createContext();
export const useBooksContext = () => useContext(BooksContext);

export function BooksProvider({ children }) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [categories, setCategories] = useState([]);
	const [books, setBooks] = useState([]);

	async function loadStock(booksToSend) {
		try {
			booksToSend.forEach(async (book) => {
				await setItemStock(book.id, book.stock);
			});
		} catch (error) {}
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
		<BooksContext.Provider value={{ loading, error, categories, books, loadStock }}>
			{children}
		</BooksContext.Provider>
	);
}
