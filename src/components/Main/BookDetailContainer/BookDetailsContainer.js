import React, { useEffect, useState } from "react";
import { useBooksContext } from "../../Contexts/BooksContext";
import { useParams } from "react-router-dom";
import BookDetails from "./BookDetails.js";
import "./BookDetailsContainer.scss";

export default function BookDetailsContainer() {
	const { loading, error, books } = useBooksContext();
	const { bookId } = useParams();
	const [notFound, setNotFound] = useState(false);
	const [book, setBook] = useState({});

	useEffect(() => {
		if (books) {
			setBook(books.find((book) => book.id === Number(bookId)));
			!loading && !book ? setNotFound(true) : setNotFound(false);
		}
	}, [books, bookId, loading, book]);

	return (
		<div className="bookDetailsContainer">
			<h2>Detalles</h2>

			{loading && <h3>Cargando libro...</h3>}
			{!loading && notFound && <h3>No se ha encontrado ese libro.</h3>}
			{error && <h3>Error al cargar el libro.</h3>}
			{!loading && book && <BookDetails book={book} />}
		</div>
	);
}
