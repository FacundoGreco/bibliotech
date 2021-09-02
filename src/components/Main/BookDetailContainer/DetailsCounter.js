import React, { useState } from "react";
import Counter from "../Counter/Counter";

export default function DetailsCounter({ max, handleAddItem }) {
	const [qty, setQty] = useState(1);

	return (
		<div className="addToCart">
			<Counter max={max} qty={qty} setQty={setQty} />

			<button
				onClick={() => {
					handleAddItem(qty);
				}}
			>
				Agregar al Carrito
			</button>
		</div>
	);
}
