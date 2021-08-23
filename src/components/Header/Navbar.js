import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./Navbar.scss";

export default function Navbar() {
	return (
		<nav className={"nav navbar-expand-md"}>
			{/* START NAV BRAND */}
			<div className={"nav__brand"}>
				<Link className={"nav__logo"} exact to={"/"}>
					<img src={"https://i.ibb.co/6n2wKTt/Biblio-Tech-logo.png"} alt={"LOGO"} />
				</Link>
				<h1 className={"nav__title"}>BiblioTech</h1>
			</div>
			{/* END NAV BRAND  */}

			{/* START NAV MENU  */}
			<div className={"nav__menu"}>
				<ul className={"navbar-nav collapse navbar-collapse"} id={"collapse_target"}>
					{/* NAVIGATION  */}
					<li className={"nav-item"}>
						<NavLink className={"nav-link"} activeClassName={"active"} exact to={"/"}>
							Inicio
						</NavLink>
					</li>
					<li className={"nav-item"}>
						<NavLink className={"nav-link"} activeClassName={"active"} exact to={"/contact"}>
							Contacto
						</NavLink>
					</li>
					<li className={"nav-item"}>Categorías</li>
					<li className={"nav-item"}>
						<Link exact to={"/cart"}>
							<CartWidget />
						</Link>
					</li>
				</ul>
			</div>
			{/* END NAV MENU*/}
		</nav>
	);
}
