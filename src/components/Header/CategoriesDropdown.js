import React, { useEffect } from "react";
import { useDropdownsContext } from "./DropdownsContext";
import { useBooksContext } from "../Contexts/BooksContext";
import { Link } from "react-router-dom";
import "./CategoriesDropdown.scss";

export default function CategoriesDropdown() {
	const { categories } = useBooksContext();
	const { catDropdownOpened, setCatDropdownOpened, closeDropdowns } = useDropdownsContext();

	useEffect(() => {
		setTimeout(() => {
			setCatDropdownOpened("opened");
		}, 1);
	}, [setCatDropdownOpened]);

	return (
		<div className={"categoriesDropdown " + catDropdownOpened}>
			<ul>
				{categories &&
					categories.map((category) => (
						<li key={category.id} className="category">
							<Link to={`/categories/${category.id}`} onClick={closeDropdowns}>
								{category.title}
							</Link>
						</li>
					))}
			</ul>
		</div>
	);
}
