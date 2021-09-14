import React, { useEffect, useState } from "react";
import "./CheckoutForm.scss";

export default function CheckoutForm() {
	const [buyer, setBuyer] = useState(
		JSON.parse(localStorage.getItem("buyer")) || {
			name: "",
			phone: "",
			mail: "",
		}
	);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setBuyer({
			...buyer,
			[name]: value,
		});
	};

	const handlePay = (e) => {
		e.preventDefault();

		console.log(buyer);
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
						value={buyer.name}
						onChange={handleChange}
						placeholder="Escriba su nombre..."
					/>
				</fieldset>

				<fieldset>
					<label htmlFor="phone">Teléfono</label>
					<input
						id="phone"
						name="phone"
						type="number"
						value={buyer.phone}
						onChange={handleChange}
						placeholder="Escriba su número de teléfono..."
					/>
				</fieldset>

				<fieldset>
					<label htmlFor="mail">Correo Electrónico</label>
					<input
						id="mail"
						name="mail"
						type="text"
						value={buyer.mail}
						onChange={handleChange}
						placeholder="Escriba su correo electrónico..."
					/>
				</fieldset>
			</div>

			<button type="submit" onClick={handlePay}>
				Pagar
			</button>
		</form>
	);
}
