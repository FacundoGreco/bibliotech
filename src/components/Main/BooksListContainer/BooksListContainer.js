import React from "react";
import { useBooksContext } from "../../Contexts/BooksContext";
import BooksList from "./BooksList";
import "./BooksListContainer.scss";

export default function BooksListContainer() {
	const { loading, error, categories, books } = useBooksContext();

	return (
		<div className={"booksListContainer"}>
			<h2>Libros</h2>

			{loading && <h3>Cargando libros...</h3>}
			{error && <h3>Error al cargar libros.</h3>}
			{!loading && categories && books && <BooksList />}
		</div>
	);
}
