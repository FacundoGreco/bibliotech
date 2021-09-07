import React from "react";
import { Link } from "react-router-dom";
import "./NoItemsAdded.scss";

export default function NoItemsAdded() {
	return (
		<div className="noItemsAdded">
			<h3>El carrito está vacío.</h3>
			<Link to="/">
				<button>AGREGAR LIBROS</button>
			</Link>
		</div>
	);
}
