import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdRemoveCircleOutline } from "react-icons/io";

import "./Counter.scss";

export default function Counter({ max, handleAddItem }) {
	const [qty, setQty] = useState(1);

	const handleSubstract = () => {
		if (qty > 1) setQty(qty - 1);
	};

	const handleAdd = () => {
		if (qty < max) setQty(qty + 1);
	};

	return (
		<>
			<div className="counterContainer">
				<IoMdRemoveCircleOutline
					className="counterButton"
					size="40px"
					color="white"
					onClick={handleSubstract}
				/>
				<p>{qty}</p>
				<IoMdAddCircleOutline className="counterButton" size="40px" color="white" onClick={handleAdd} />
			</div>
			<button
				onClick={() => {
					handleAddItem(qty);
				}}
			>
				Agregar al carrito
			</button>
		</>
	);
}
