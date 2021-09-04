import React, { useEffect, useState } from "react";
import { useBooksContext } from "../Contexts/BooksContext";
import { Link } from "react-router-dom";
import "./CategoriesDropdown.scss";

export default function CategoriesDropdown() {
	const { categories } = useBooksContext();
	const [opened, setOpened] = useState("");

	useEffect(() => {
		setTimeout(() => {
			setOpened("opened");
		}, 1);
	}, []);

	return (
		<div className={"categoriesDropdown " + opened}>
			<ul>
				{categories &&
					categories.map((category) => (
						<li key={category.id} className="category">
							<Link to={`/categories/${category.id}`}>{category.title}</Link>
						</li>
					))}
			</ul>
		</div>
	);
}
