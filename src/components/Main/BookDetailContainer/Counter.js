import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdRemoveCircleOutline } from "react-icons/io";

import "./Counter.scss";

export default function Counter() {
	return (
		<div className="counterContainer">
			<IoMdRemoveCircleOutline className="counterButton" size="40px" color="white" />
			<p>1</p>
			<IoMdAddCircleOutline className="counterButton" size="40px" color="white" />
		</div>
	);
}
