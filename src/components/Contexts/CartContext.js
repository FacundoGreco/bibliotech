import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
	const [itemsQty, setItemsQty] = useState(JSON.parse(localStorage.getItem("itemsQty")) || 0);

	const isInCart = (id) => {
		return cartItems.some((item) => item.item.id === id);
	};

	const addItem = (item, qty) => {
		if (!isInCart(item.id)) {
			const cartCopy = [...cartItems];
			cartCopy.push({ item: item, qty: qty });

			setCartItems(cartCopy);
			setItemsQty(itemsQty + qty);
		}
	};

	const updateItemQty = (id, newQty) => {
		const cartCopy = [...cartItems];
		const item = cartCopy.find((item) => item.item.id === id);
		const qty = item.qty;

		item.qty = newQty;

		setCartItems(cartCopy);
		setItemsQty(itemsQty - qty + newQty);
	};

	const removeItem = (id) => {
		let cartCopy = [...cartItems];
		const qty = cartCopy.find((item) => item.item.id === id).qty;
		cartCopy = cartCopy.filter((item) => item.item.id !== id);

		setCartItems(cartCopy);
		setItemsQty(itemsQty - qty);
	};

	const clearCart = () => {
		setCartItems([]);
		setItemsQty(0);
	};

	useEffect(() => {
		//SAVES CART ITEMS IN LOCAL STORAGE
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
		//SAVES ITEMS QUANTITY IN LOCAL STORAGE
		localStorage.setItem("itemsQty", JSON.stringify(itemsQty));
	}, [cartItems, itemsQty]);

	return (
		<CartContext.Provider value={{ cartItems, itemsQty, isInCart, addItem, updateItemQty, removeItem, clearCart }}>
			{children}
		</CartContext.Provider>
	);
}
