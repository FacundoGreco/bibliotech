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

// async function saveBooks(book) {
// 	try {
// 		await db.collection("books").doc().set(book);
// 	} catch (error) {
// 		console.log(error);
// 		throw new Error("El mensaje no se pudo enviar.");
// 	}
// }

export { getCategories, getBooks };
