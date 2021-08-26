import React from "react";
import "./ContactContainer.scss";
import RequestBookForm from "./RequestBookForm.js";
import InquiryForm from "./InquiryForm.js";

export default function ContactContainer() {
	return (
		<div className="contactContainer">
			<h2>Contacto</h2>

			<div className="contactFormsContainer">
				<RequestBookForm />

				<InquiryForm />
			</div>
		</div>
	);
}
