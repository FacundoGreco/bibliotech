import React from "react";
import { useBooksContext } from "../../Contexts/BooksContext";
import { useParams } from "react-router-dom";
import Book from "./Book";
import Category from "./Category";

export default function BooksList() {
	const { categories, books } = useBooksContext();
	const { categoryId } = useParams();

	const getBooksSortedByCategory = (category) => {
		return books
			.filter((book) => book.category === category)
			.map((book) => (
				<Book id={book.id} title={book.title} price={book.price} imgUrl={book.imgUrl} key={book.id} />
			));
	};

	return (
		<div className="booksList">
			{/* Show all categories */}
			{categories &&
				books &&
				!categoryId &&
				categories.map((category) => (
					<Category key={category.id} name={category.title}>
						{getBooksSortedByCategory(category.id)}
					</Category>
				))}

			{/* Show searched category */}
			{categories &&
				books &&
				categoryId &&
				categories
					.filter((category) => category.id === categoryId)
					.map((category) => (
						<Category key={category.id} name={category.title}>
							{getBooksSortedByCategory(category.id)}
						</Category>
					))}
		</div>
	);
}
