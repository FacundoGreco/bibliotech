import React, { useState } from "react";
import NavMenu from "./NavMenu";
import { CgMenu } from "react-icons/cg";

export default function MobileNavigation() {
	const [navMenuOpened, setNavMenuOpened] = useState(false);
	const [opened, setOpened] = useState("");

	return (
		<div className="mobileNavigation">
			<CgMenu
				className="hamburgerButton"
				size="40px"
				color="black"
				onClick={() => {
					setNavMenuOpened(!navMenuOpened);
					setTimeout(() => {
						!navMenuOpened ? setOpened("opened") : setOpened("");
					}, 1);
				}}
			/>

			{navMenuOpened && (
				<div className={"navMenu " + opened}>
					<NavMenu />
				</div>
			)}
		</div>
	);
}
