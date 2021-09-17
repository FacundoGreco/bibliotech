import { db } from "./database.js";

async function getCategories(setCategories) {
	try {
		db.collection("categories")
			.orderBy("booksQty", "desc")
			.onSnapshot((querySnapshot) => {
				const categories = [];

				querySnapshot.forEach((doc) => {
					categories.push({ ...doc.data() });
				});
				setCategories(categories);
			});
	} catch (error) {
		console.log(error);
		throw new Error("Las categorías no se pudieron cargar.");
	}
}

async function getBooks(setBooks, setLoading) {
	try {
		db.collection("books")
			.orderBy("category", "asc")
			.orderBy("title", "asc")
			.onSnapshot((querySnapshot) => {
				const books = [];

				querySnapshot.forEach((doc) => {
					books.push({ ...doc.data() });
				});
				setBooks(books);
				setLoading(false);
			});
	} catch (error) {
		console.log(error);
		setLoading(false);
		throw new Error("Los mensajes no se pudieron cargar.");
	}
}

async function checkItemsStock(items, setItemsOutOfStock, updateItemStock) {
	try {
		const itemsOutOfStock = [];
		const batch = db.batch();

		//GETS QUERY OF ITEMS IN CART
		const itemsToUpdateQuery = await db
			.collection("books")
			.where(
				"id",
				"in",
				items.map((item) => item.id)
			)
			.get();

		//UPDATES BATCH OR PUSH OUT OF STOCK ITEM
		itemsToUpdateQuery.docs.forEach((doc) => {
			const { id, qty, title } = items.find((item) => item.id === doc.data().id);

			if (doc.data().stock >= qty) {
				batch.update(doc.ref, { stock: doc.data().stock - qty });
			} else {
				itemsOutOfStock.push({ id: id, title: title, stock: doc.data().stock });
			}
		});

		//IF THERE IS STOCK FOR EVERY ITEM, COMMITS BATCH
		if (itemsOutOfStock.length === 0) {
			batch.commit();
			return true;
		} else {
			setItemsOutOfStock(itemsOutOfStock);
			itemsOutOfStock.forEach((item) => updateItemStock(item.id, item.stock));
			return false;
		}
	} catch (error) {
		console.log(error);
		throw new Error("No se pudo checkear el stock.");
	}
}

async function sendNewOrder(order, setOrderId) {
	try {
		await db
			.collection("orders")
			.add(order)
			.then((res) => setOrderId(res.id));
	} catch (error) {
		console.log(error);
		throw new Error("La orden no se pudo enviar.");
	}
}

export { getCategories, getBooks, checkItemsStock, sendNewOrder };
