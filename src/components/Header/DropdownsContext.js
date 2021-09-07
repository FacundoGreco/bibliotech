import React, { createContext, useContext, useState } from "react";

export const DropdownsContext = createContext();

export const useDropdownsContext = () => useContext(DropdownsContext);

export function DropdownsProvider({ children }) {
	const [mobNavOpened, setMobNavOpened] = useState("");
	const [catDropdownOpened, setCatDropdownOpened] = useState("");

	const closeDropdowns = () => {
		setMobNavOpened("");
		setCatDropdownOpened("");
	};

	return (
		<DropdownsContext.Provider
			value={{ mobNavOpened, setMobNavOpened, catDropdownOpened, setCatDropdownOpened, closeDropdowns }}
		>
			{children}
		</DropdownsContext.Provider>
	);
}
