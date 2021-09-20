import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { validateAdmin } from "../../../model/model";

import "./AdminContainer.scss";

export default function AdminContainer() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [adminLogged, setAdminLogged] = useState(false);

	const handleLogin = async (e, user) => {
		e.preventDefault();
		setLoading(true);

		try {
			const userExist = await validateAdmin(user);
			setAdminLogged(userExist);
			setLoading(false);
		} catch (err) {
			console.log(err);
			setError(true);
		}
	};

	return (
		<div className="adminContainer">
			<h2>Panel de Administrador</h2>

			<div className="adminPanels">
				{!loading && !adminLogged && <LoginForm handleLogin={handleLogin} />}
				{loading && <h3>Validando...</h3>}
				{error && <h3>Se produjo un error...</h3>}
				{!loading && adminLogged && <h3>Logueado!</h3>}
			</div>
		</div>
	);
}
