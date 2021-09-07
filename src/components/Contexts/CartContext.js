import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

	const isInCart = (id) => {
		return cartItems.some((item) => item.item.id === id);
	};

	const addItem = (item, qty) => {
		if (!isInCart(item.id)) {
			const cartCopy = [...cartItems];
			cartCopy.push({ item: item, qty: qty });

			setCartItems(cartCopy);
		}
	};

	const updateItemQty = (id, qty) => {
		const cartCopy = [...cartItems];
		cartCopy.find((item) => item.item.id === id).qty = qty;

		setCartItems(cartCopy);
	};

	const removeItem = (id) => {
		let cartCopy = [...cartItems];
		cartCopy = cartCopy.filter((item) => item.item.id !== id);

		setCartItems(cartCopy);
	};

	const clearCart = () => {
		setCartItems([]);
	};

	useEffect(() => {
		//SAVES CART ITEMS IN LOCAL STORAGE
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}, [cartItems]);

	return (
		<CartContext.Provider value={{ cartItems, isInCart, addItem, updateItemQty, removeItem, clearCart }}>
			{children}
		</CartContext.Provider>
	);
}
