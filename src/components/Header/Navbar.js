import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import CategoriesDropdown from "./CategoriesDropdown";
import "./Navbar.scss";

export default function Navbar({ categories }) {
	const [dropdownOpened, setDropdownOpened] = useState(false);

	return (
		<nav className="nav navbar-expand-md">
			{/* START NAV BRAND */}
			<div className="nav__brand">
				<Link className="nav__logo" to="/">
					<img src="https://i.ibb.co/6n2wKTt/Biblio-Tech-logo.png" alt="LOGO" />
				</Link>
				<h1 className="nav__title">BiblioTech</h1>
			</div>
			{/* END NAV BRAND  */}

			{/* START NAV MENU  */}
			<div className="nav__menu">
				<ul className="navbar-nav collapse navbar-collapse" id="collapse_target">
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
			</div>
			{/* END NAV MENU*/}
		</nav>
	);
}
