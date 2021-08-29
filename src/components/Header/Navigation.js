import React from "react";
import NavMenu from "./NavMenu";

export default function Navigation({ categories }) {
	return (
		<div className="navMenu navigation">
			<NavMenu categories={categories} />
		</div>
	);
}
