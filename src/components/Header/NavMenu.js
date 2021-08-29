import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import CategoriesDropdown from "./CategoriesDropdown";
import "./NavMenu.scss";

export default function NavMenu({ categories }) {
	const [dropdownOpened, setDropdownOpened] = useState(false);

	return (
		<ul className="navbar-nav">
			{/* NAVIGATION  */}
			<li className="nav-item">
				<NavLink className="nav-link" activeClassName="active" exact to="/">
					Inicio
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" activeClassName="active" exact to="/contact">
					Contacto
				</NavLink>
			</li>
			<div>
				<li
					className="nav-item categories"
					onClick={() => {
						setDropdownOpened(!dropdownOpened);
					}}
				>
					Categorías
				</li>
				{dropdownOpened && <CategoriesDropdown categories={categories} />}
			</div>
			<li className="nav-item">
				<Link to="/cart">
					<CartWidget />
				</Link>
			</li>
		</ul>
	);
}
