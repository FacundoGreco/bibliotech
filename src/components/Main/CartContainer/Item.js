import React from "react";
import { FiTrash } from "react-icons/fi";
import Counter from "../Counter/Counter";
import { useCartContext } from "../../Contexts/CartContext";

import "./Item.scss";

export default function Item({ id, title, stock, qty }) {
	const { updateItemQty, removeItem } = useCartContext();
	const handleUpdateQty = (qty) => {
		updateItemQty(id, qty);
	};

	return (
		<div className="item">
			<div className="titleDiv">
				<h5>{title}</h5>
			</div>

			<div className="qtyDiv">
				<Counter max={stock} qty={qty} setQty={handleUpdateQty} />
			</div>

			<div className="removeDiv">
				<FiTrash
					className="removeButton"
					size="25px"
					color="white"
					onClick={() => {
						removeItem(id);
					}}
				/>
			</div>
		</div>
	);
}
