import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);
	const [itemsQty, setItemsQty] = useState(JSON.parse(localStorage.getItem("itemsQty")) || 0);
	const [cartTotal, setCartTotal] = useState(JSON.parse(localStorage.getItem("cartTotal")) || 0);

	const isInCart = (id) => {
		return cartItems.some((item) => item.item.id === id);
	};

	const addItem = (item, qty) => {
		if (!isInCart(item.id)) {
			const cartCopy = [...cartItems];

			const subtotal = item.price * qty;
			cartCopy.push({ item: item, qty: qty, subtotal: subtotal });

			setCartItems(cartCopy);
			setItemsQty(itemsQty + qty);
			setCartTotal(cartTotal + subtotal);
		}
	};

	const updateItemQty = (id, newQty) => {
		const cartCopy = [...cartItems];
		const item = cartCopy.find((item) => item.item.id === id);
		const qty = item.qty;
		const subtotal = item.subtotal;
		const newSubtotal = item.item.price * newQty;

		item.qty = newQty;
		item.subtotal = newSubtotal;

		setCartItems(cartCopy);
		setItemsQty(itemsQty - qty + newQty);
		setCartTotal(cartTotal - subtotal + newSubtotal);
	};

	const removeItem = (id) => {
		let cartCopy = [...cartItems];
		const item = cartCopy.find((item) => item.item.id === id);
		const qty = item.qty;
		const subtotal = item.subtotal;
		cartCopy = cartCopy.filter((item) => item.item.id !== id);

		setCartItems(cartCopy);
		setItemsQty(itemsQty - qty);
		setCartTotal(cartTotal - subtotal);
	};

	const clearCart = () => {
		setCartItems([]);
		setItemsQty(0);
		setCartTotal(0);
	};

	useEffect(() => {
		//SAVES CART ITEMS IN LOCAL STORAGE
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
		//SAVES ITEMS QUANTITY IN LOCAL STORAGE
		localStorage.setItem("itemsQty", JSON.stringify(itemsQty));
		//SAVES CART TOTAL IN LOCAL STORAGE
		localStorage.setItem("cartTotal", JSON.stringify(cartTotal));
	}, [cartItems, itemsQty, cartTotal]);

	return (
		<CartContext.Provider
			value={{ cartItems, itemsQty, cartTotal, isInCart, addItem, updateItemQty, removeItem, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
}
