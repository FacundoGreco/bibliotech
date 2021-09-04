import React, { createContext, useContext, useEffect, useState } from "react";
import { getCategories, getBooks } from "../../model/model.js";

export const BooksContext = createContext();

export const useBooksContext = () => useContext(BooksContext);

export function BooksProvider({ children }) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [categories, setCategories] = useState([]);
	const [books, setBooks] = useState([]);

	useEffect(() => {
		getCategories(setCategories).catch((err) => {
			console.log(err);
			setError(true);
		});

		getBooks(setBooks, setLoading).catch((err) => {
			console.log(err);
			setError(true);
		});
	}, []);

	return <BooksContext.Provider value={{ loading, error, categories, books }}>{children}</BooksContext.Provider>;
}
