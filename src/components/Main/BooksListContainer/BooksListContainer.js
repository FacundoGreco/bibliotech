import React, { useEffect, useState } from "react";
import BooksList from "./BooksList";
import "./BooksListContainer.scss";
import { getBooks } from "../../../model/model.js";

export default function BooksListContainer() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [books, setBooks] = useState([]);

	useEffect(() => {
		getBooks(setBooks, setLoading).catch((err) => {
			console.log(err);
			setError(true);
		});
	}, []);

	return (
		<div className={"booksListContainer"}>
			<h2>Libros</h2>

			{loading && <h3>Cargando libros...</h3>}
			{error && <h3>Error al cargar libros.</h3>}
			{!loading && books && <BooksList books={books} />}
		</div>
	);
}
