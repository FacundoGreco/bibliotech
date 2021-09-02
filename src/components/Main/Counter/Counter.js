import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdRemoveCircleOutline } from "react-icons/io";

import "./Counter.scss";

export default function Counter({ max, qty, setQty }) {
	const handleSubstract = () => {
		if (qty > 1) setQty(qty - 1);
	};

	const handleAdd = () => {
		if (qty < max) setQty(qty + 1);
	};

	return (
		<div className="counterContainer">
			<IoMdRemoveCircleOutline className="counterButton" size="40px" color="white" onClick={handleSubstract} />
			<p>{qty}</p>
			<IoMdAddCircleOutline className="counterButton" size="40px" color="white" onClick={handleAdd} />
		</div>
	);
}
