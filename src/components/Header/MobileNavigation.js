import React, { useState } from "react";
import { useDropdownsContext } from "./DropdownsContext";
import NavMenu from "./NavMenu";
import { CgMenu } from "react-icons/cg";

export default function MobileNavigation() {
	const [navMenuOpened, setNavMenuOpened] = useState(false);
	const { mobNavOpened, setMobNavOpened } = useDropdownsContext();

	return (
		<div className="mobileNavigation">
			<CgMenu
				className="hamburgerButton"
				size="40px"
				color="black"
				onClick={() => {
					setNavMenuOpened(!navMenuOpened);

					//SETS OPENED AFTER A SECOND TO FORCE TRANSITION EFFECT
					setTimeout(() => {
						!navMenuOpened ? setMobNavOpened("opened") : setMobNavOpened("");
					}, 1);
				}}
			/>

			{navMenuOpened && (
				<div className={"navMenu " + mobNavOpened}>
					<NavMenu />
				</div>
			)}
		</div>
	);
}
