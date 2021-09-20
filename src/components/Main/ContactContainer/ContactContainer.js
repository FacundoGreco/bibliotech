import React from "react";
import RequestBookForm from "./RequestBookForm.js";
import InquiryForm from "./InquiryForm.js";
import "./ContactContainer.scss";

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
