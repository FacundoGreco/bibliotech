import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

	const isInCart = (id) => {
		return cartItems.some((item) => item.item.id === id);
	};

	const getItemsQty = () => {
		return cartItems.reduce((acc, item) => acc + item.qty, 0);
	};

	const getCartTotal = () => {
		return cartItems.reduce((acc, item) => acc + item.item.price * item.qty, 0);
	};

	const addItem = (item, qty) => {
		if (!isInCart(item.id)) {
			const cartCopy = [...cartItems];

			const subtotal = item.price * qty;
			cartCopy.push({ item: item, qty: qty, subtotal: subtotal });

			setCartItems(cartCopy);
		}
	};

	const updateItemQty = (id, newQty) => {
		const cartCopy = [...cartItems];
		const item = cartCopy.find((item) => item.item.id === id);
		const newSubtotal = item.item.price * newQty;

		item.qty = newQty;
		item.subtotal = newSubtotal;

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
		<CartContext.Provider
			value={{ cartItems, isInCart, getItemsQty, getCartTotal, addItem, updateItemQty, removeItem, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
}
