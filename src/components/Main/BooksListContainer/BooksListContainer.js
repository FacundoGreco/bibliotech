import React, { useEffect, useState } from "react";
import BooksList from "./BooksList";
import "./BooksListContainer.scss";

export default function BooksListContainer() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [books, setBooks] = useState([]);

	const fetchBooks = () => {
		return new Promise((resolve, reject) => {
			fetch("http://localhost:3001/books")
				.then((response) => {
					return response.json();
				})
				.then((json) => {
					resolve(json);
				})
				.catch((err) => {
					reject(err);
				});
		});
	};

	useEffect(() => {
		fetchBooks()
			.then((books) => {
				setLoading(false);
				setBooks(books);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
				setError(true);
			});
	}, []);

	return (
		<section className={"itemListContainer"}>
			<h2>Libros</h2>

			{loading && <h3>Cargando libros...</h3>}
			{error && <h3>No se ha encontrado ningún libro.</h3>}
			{books && <BooksList books={books} />}
		</section>
	);
}
