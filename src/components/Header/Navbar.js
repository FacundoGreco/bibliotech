import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import "./Navbar.scss";

export default function Navbar({ categories }) {
	return (
		<>
			<nav className="nav navbar-expand-md">
				{/* START NAV BRAND */}
				<div className="nav__brand">
					<Link className="nav__logo" to="/">
						<img src="https://i.ibb.co/6n2wKTt/Biblio-Tech-logo.png" alt="LOGO" />
					</Link>
					<h1 className="nav__title">BiblioTech</h1>
				</div>
				{/* END NAV BRAND  */}

				<Navigation categories={categories} />
				<MobileNavigation categories={categories} />
			</nav>
		</>
	);
}
