import React from "react";
import "./Category.scss";

export default function Category({ name, children }) {
	return (
		<section className="booksCategory">
			<h3>{name}</h3>
			<div className="booksGrid">{children}</div>
		</section>
	);
}
