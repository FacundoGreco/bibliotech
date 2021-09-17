import React, { useState } from "react";
import Counter from "../Counter/Counter";

export default function DetailsCounter({ max, handleAddItem }) {
	const [qty, setQty] = useState(max !== 0 ? 1 : 0);

	return (
		<div className="addToCart">
			<Counter max={max} qty={qty <= max ? qty : max} setQty={setQty} />

			<button
				disabled={max === 0 ? true : false}
				onClick={() => {
					handleAddItem(qty);
				}}
			>
				Agregar al Carrito
			</button>
		</div>
	);
}
