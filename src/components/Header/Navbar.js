import React from "react";
import { DropdownsProvider } from "./DropdownsContext";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import "./Navbar.scss";

export default function Navbar() {
	return (
		<DropdownsProvider>
			<nav className="nav navbar-expand-md">
				{/* NAV BRAND */}
				<div className="nav__brand">
					<Link className="nav__logo" to="/">
						<img src="https://i.ibb.co/6n2wKTt/Biblio-Tech-logo.png" alt="LOGO" />
					</Link>
					<h1 className="nav__title">BiblioTech</h1>
				</div>

				{/* NAVIGATION */}
				<Navigation />
				<MobileNavigation />
			</nav>
		</DropdownsProvider>
	);
}
