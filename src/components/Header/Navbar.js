import React from "react";
import CartWidget from './CartWidget';
import "./Navbar.scss";

export default function Navbar() {
	return (
		<nav
			className={"nav navbar-dark navbar navbar-expand-lg container-fluid row"}
		>
			{/* START NAV BRAND */}
			<div className={"nav__brand col-10 col-lg-4"}>
				<a className={"nav__logo"} href={"/#/index"}>
					<img src={"https://i.ibb.co/m0M8z8y/logo.jpg"} alt={"LOGO"} />
				</a>
				<h1 className={"nav__title"}>JACK & JEK</h1>
			</div>
			{/* END NAV BRAND  */}

			{/* START NAV MENU  */}
			<div className={"nav__menu m-auto col-lg-8"}>
				<ul
					className={
						"navbar-nav my-auto mx-lg-4 mx-xl-5 collapse navbar-collapse"
					}
					id={"collapse_target"}
				>
					{/* NAVIGATION  */}
					<li className={"nav-item"}>
						<a className={"nav-link active"} href={"/#/index"}>
							Inicio
						</a>
					</li>
					<li className={"nav-item"}>
						<a className={"nav-link"} href={"/#/menu"}>
							Menú
						</a>
					</li>
					<li className={"nav-item"}>
						<a className={"nav-link"} href={"/#/orders"}>
							Pedidos
						</a>
					</li>
					<li className={"nav-item"}>
						<a className={"nav-link"} href={"/#/contact"}>
							Contacto
						</a>
					</li>
					<li className={"nav-item"}>
						<a className={"nav-link"} href={"/#/jobs"}>
							Empleos
						</a>
					</li>
				</ul>
			</div>
			<CartWidget/>
			{/* END NAV MENU*/}
		</nav>
	);
}
