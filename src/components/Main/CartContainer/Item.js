import React from "react";
import { FiTrash } from "react-icons/fi";
import { useCartContext } from "../../Contexts/CartContext";

import "./Item.scss";

export default function Item({ id, title, qty }) {
	const { removeItem } = useCartContext();

	return (
		<div className="item">
			<div className="titleDiv">
				<h5>{title}</h5>
			</div>

			<div className="qtyDiv">
				<p>{qty}</p>
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
