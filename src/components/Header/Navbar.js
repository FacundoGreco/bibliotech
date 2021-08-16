import React from "react";
import CartWidget from "./CartWidget";
import "./Navbar.scss";

export default function Navbar() {
	return (
		<nav className={"nav navbar-expand-md"}>
			{/* START NAV BRAND */}
			<div className={"nav__brand"}>
				<a className={"nav__logo"} href={"/index"}>
					<img src={"https://i.ibb.co/6n2wKTt/Biblio-Tech-logo.png"} alt={"LOGO"} />
				</a>
				<h1 className={"nav__title"}>BiblioTech</h1>
			</div>
			{/* END NAV BRAND  */}

			{/* START NAV MENU  */}
			<div className={"nav__menu"}>
				<ul className={"navbar-nav collapse navbar-collapse"} id={"collapse_target"}>
					{/* NAVIGATION  */}
					<li className={"nav-item"}>
						<a className={"nav-link active"} href={"/inicio"}>
							Inicio
						</a>
					</li>
					<li className={"nav-item"}>
						<a className={"nav-link"} href={"/contacto"}>
							Contacto
						</a>
					</li>
					<li className={"nav-item"}>
						<CartWidget />
					</li>
				</ul>
			</div>
			{/* END NAV MENU*/}
		</nav>
	);
}
