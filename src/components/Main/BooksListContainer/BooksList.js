import React from "react";
import Book from "./Book";
import Category from "./Category";

export default function BooksList({ books }) {
	const getBooksSortedByCategory = (category) => {
		return books
			.filter((book) => book.category === category)
			.map((book) => (
				<Book
					title={book.title}
					description={book.description}
					price={book.price}
					imgUrl={book.imgUrl}
					key={book.id}
				/>
			));
	};

	return (
		<div className="booksList">
			{books && (
				<>
					<Category name="Novelas">{getBooksSortedByCategory("novel")}</Category>
					<Category name="Aventura">{getBooksSortedByCategory("adventure")}</Category>
					<Category name="Infantil">{getBooksSortedByCategory("children")}</Category>
				</>
			)}
		</div>
	);
}
