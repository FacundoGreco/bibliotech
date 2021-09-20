import React, { useState } from "react";
import "./LoginForm.scss";

export default function LoginForm({ handleLogin }) {
	const [user, setUser] = useState({ username: "", password: "" });

	const handleChange = (e) => {
		const { name, value } = e.target;

		setUser({
			...user,
			[name]: value,
		});
	};

	return (
		<form
			className="loginForm"
			onSubmit={(e) => {
				handleLogin(e, user);
			}}
		>
			<div className="inputsContainer">
				<fieldset>
					<label htmlFor="username">Usuario</label>
					<input
						id="username"
						name="username"
						type="text"
						value={user.username}
						placeholder="Escriba su username..."
						onChange={handleChange}
					/>
				</fieldset>

				<fieldset>
					<label htmlFor="password">Contraseña</label>
					<input
						id="password"
						name="password"
						type="password"
						value={user.password}
						placeholder="Escriba su contraseña..."
						onChange={handleChange}
					/>
				</fieldset>
			</div>

			<button type="submit">Ingresar</button>
		</form>
	);
}
