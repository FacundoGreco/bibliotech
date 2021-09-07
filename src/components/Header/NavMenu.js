import React, { useState } from "react";
import { useDropdownsContext } from "./DropdownsContext";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import CategoriesDropdown from "./CategoriesDropdown";
import "./NavMenu.scss";

export default function NavMenu() {
	const [dropdownOpened, setDropdownOpened] = useState(false);
	const { closeDropdowns } = useDropdownsContext();

	return (
		<ul className="navbar-nav">
			{/* NAVIGATION  */}
			<li className="nav-item">
				<NavLink className="nav-link" activeClassName="active" exact to="/" onClick={closeDropdowns}>
					Inicio
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" activeClassName="active" exact to="/contact" onClick={closeDropdowns}>
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
				{dropdownOpened && <CategoriesDropdown />}
			</div>
			<li className="nav-item">
				<Link to="/cart" onClick={closeDropdowns}>
					<CartWidget />
				</Link>
			</li>
		</ul>
	);
}
