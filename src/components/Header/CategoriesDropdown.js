import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CategoriesDropdown.scss";

export default function CategoriesDropdown() {
	const [opened, setOpened] = useState("");

	useEffect(() => {
		setTimeout(() => {
			setOpened("opened");
		}, 1);
	}, []);

	return (
		<div className={"categoriesDropdown " + opened}>
			<ul>
				<li className="category">
					<Link to="/categories/novel">Novela</Link>
				</li>
				<li className="category">
					<Link to="/categories/adventure">Aventura</Link>
				</li>
				<li className="category">
					<Link to="/categories/children">Infantil</Link>
				</li>
			</ul>
		</div>
	);
}
