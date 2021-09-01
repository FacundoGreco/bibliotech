import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBooks } from "../../../model/model.js";
import BookDetails from "./BookDetails.js";
import "./BookDetailsContainer.scss";

export default function BookDetailsContainer() {
	const { bookId } = useParams();
	const [loading, setLoading] = useState(true);
	const [notFound, setNotFound] = useState(false);
	const [error, setError] = useState(false);
	const [books, setBooks] = useState([]);
	const [book, setBook] = useState({});

	useEffect(() => {
		if (bookId) {
			getBooks(setBooks, setLoading).catch((err) => {
				console.log(err);
				setError(true);
			});
		}
	}, [bookId]);

	useEffect(() => {
		if (books) {
			setBook(books.find((book) => book.id === Number(bookId)));
		}
	}, [books, bookId]);

	useEffect(() => {
		!loading && !book ? setNotFound(true) : setNotFound(false);
	}, [book, bookId, loading]);

	return (
		<div className="bookDetailsContainer">
			<h2>Detalles</h2>

			{loading && <h3>Cargando libro...</h3>}
			{!loading && notFound && <h3>No se ha encontrado ese libro.</h3>}
			{error && <h3>Error al cargar el libro.</h3>}
			{!loading && book && (
				<BookDetails
					id={book.id}
					title={book.title}
					description={book.description}
					price={book.price}
					imgUrl={book.imgUrl}
					stock={book.stock}
				/>
			)}
		</div>
	);
}
