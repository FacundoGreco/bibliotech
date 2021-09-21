import React, { useState } from "react";
import "./Item.scss";

export default function Item({ book, changeStock }) {
	const [stock, setStock] = useState(book.stock);

	const handleChange = (e) => {
		const stock = e.target.value;
		setStock(stock);
		changeStock(book.id, stock);
	};

	return (
		<li className="item">
			<div className="titleDiv">
				<h4>{book.title}</h4>
			</div>

			<div className="stockDiv">
				<input type="number" value={stock} onChange={handleChange} />
			</div>
		</li>
	);
}
