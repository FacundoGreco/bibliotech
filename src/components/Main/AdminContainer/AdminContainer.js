import React from "react";
import LoginForm from "./LoginForm";

import "./AdminContainer.scss";

export default function AdminContainer() {
	return (
		<div className="adminContainer">
			<h2>Panel de Administrador</h2>

			<div className="adminPanels">
				<LoginForm />
			</div>
		</div>
	);
}
