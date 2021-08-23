import React from "react";
import Book from "./Book";
import "./BookList.scss";

export default function BooksList({ books }) {
	return (
		<div className={"booksList"}>
			{books.map((book) => (
				<Book title={book.title} description={book.description} price={book.price} imgUrl={book.imgUrl} key={book.id} />
			))}
		</div>
	);
}
