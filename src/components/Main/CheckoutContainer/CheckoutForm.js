import React, { useEffect, useState } from "react";
import "./CheckoutForm.scss";

export default function CheckoutForm({ generateOrder }) {
	const [buyer, setBuyer] = useState(
		JSON.parse(localStorage.getItem("buyer")) || {
			name: "",
			phone: "",
			mail: "",
		}
	);

	const [validateMessages, setValidateMessages] = useState({ name: "", phone: "", mail: "" });

	const validateInputs = ({ name, phone, mail }) => {
		let validateMessagesCopy = { name: "", phone: "", mail: "" };

		if (!(name.length >= 3)) {
			validateMessagesCopy = {
				...validateMessagesCopy,
				name: "El nombre tiene que tener como mínimo tres caracteres.",
			};
		}

		if (!(phone.length >= 9)) {
			validateMessagesCopy = {
				...validateMessagesCopy,
				phone: "El número tiene que tener como mínimo nueve caracteres.",
			};
		}

		if (!mail.includes("@")) {
			validateMessagesCopy = {
				...validateMessagesCopy,
				mail: "El correo introducido no es válido.",
			};
		}

		setValidateMessages(validateMessagesCopy);

		return name.length >= 3 && phone.length >= 9 && mail.includes("@") ? true : false;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		let buyerCopy = { ...buyer };

		buyerCopy = { ...buyerCopy, [name]: value };

		setBuyer(buyerCopy);
		validateInputs(buyerCopy);
	};

	const handlePay = (e) => {
		e.preventDefault();

		if (validateInputs(buyer)) generateOrder(buyer);
	};

	useEffect(() => {
		//SAVES BUYER IN LOCAL STORAGE
		localStorage.setItem("buyer", JSON.stringify(buyer));
	}, [buyer]);

	return (
		<form className="checkoutForm" action="">
			<h3>Ingrese los datos del titular!</h3>

			<div className="inputsContainer">
				<fieldset>
					<label htmlFor="name">Nombre</label>
					<input
						id="name"
						name="name"
						type="text"
						title="Como mínimo 3 caracteres."
						value={buyer.name}
						onChange={handleChange}
						placeholder="Escriba su nombre..."
					/>
					<p>{validateMessages.name}</p>
				</fieldset>

				<fieldset>
					<label htmlFor="phone">Teléfono</label>
					<input
						id="phone"
						name="phone"
						type="number"
						title="3335000111 ó 155000111"
						value={buyer.phone}
						onChange={handleChange}
						placeholder="Escriba su número de teléfono..."
					/>
					<p>{validateMessages.phone}</p>
				</fieldset>

				<fieldset>
					<label htmlFor="mail">Correo Electrónico</label>
					<input
						id="mail"
						name="mail"
						type="email"
						title="correoelectronico@mail.com"
						value={buyer.mail}
						onChange={handleChange}
						placeholder="Escriba su correo electrónico..."
					/>
					<p>{validateMessages.mail}</p>
				</fieldset>
			</div>

			<button type="submit" onClick={handlePay}>
				Pagar
			</button>
		</form>
	);
}
