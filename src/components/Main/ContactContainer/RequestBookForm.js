import React from "react";
import "./RequestBookForm.scss";

export default function RequestBookForm() {
	return (
		<form className="requestBookForm" action="">
			<h3>Pedinos un libro que no tengamos!</h3>

			<div className="inputsContainer">
				<fieldset>
					<label htmlFor="name">Nombre</label>
					<input id="name" name="name" type="text" placeholder="Escriba su nombre..." />
				</fieldset>
				<fieldset>
					<label htmlFor="mail">Correo Electrónico</label>
					<input id="mail" name="mail" type="text" placeholder="Escriba su correo electrónico..." />
				</fieldset>
				<fieldset>
					<label htmlFor="book">Libro</label>
					<input id="book" name="book" type="text" placeholder="Escriba el nombre del libro..." />
				</fieldset>
			</div>

			<button type="submit">Enviar</button>
		</form>
	);
}
