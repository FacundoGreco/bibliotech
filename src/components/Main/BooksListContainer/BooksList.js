import React from "react";
import { useParams } from "react-router-dom";
import Book from "./Book";
import Category from "./Category";

export default function BooksList({ books }) {
	const { categoryId } = useParams();

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
					{(categoryId === "novel" || !categoryId) && (
						<Category name="Novelas">{getBooksSortedByCategory("novel")}</Category>
					)}
					{(categoryId === "adventure" || !categoryId) && (
						<Category name="Aventura">{getBooksSortedByCategory("adventure")}</Category>
					)}
					{(categoryId === "children" || !categoryId) && (
						<Category name="Infantil">{getBooksSortedByCategory("children")}</Category>
					)}
				</>
			)}
		</div>
	);
}
