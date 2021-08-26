import React from "react";
import "./InquiryForm.scss";

export default function InquiryForm() {
	return (
		<form className="inquiryForm" action="">
			<h3>Dejanos tu consulta o sugerencia!</h3>
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
					<label htmlFor="message">Mensaje</label>
					<textarea id="message" name="message" type="text" placeholder="Escriba su mensaje..." />
				</fieldset>
			</div>
			<button type="submit">Enviar</button>
		</form>
	);
}
