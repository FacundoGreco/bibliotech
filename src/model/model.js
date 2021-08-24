import { db } from "./database.js";

// async function getBooks(setBooks) {
// 	try {
// 		db.collection("books")
// 			.orderBy("date", "asc")
// 			.onSnapshot((querySnapshot) => {
// 				const chatHistory = [];

// 				querySnapshot.forEach((doc) => {
// 					chatHistory.push({ id: doc.id, ...doc.data() });
// 				});
// 				setBooks(chatHistory);
// 			});
// 	} catch (error) {
// 		console.log(error);
// 		throw new Error("Los mensajes no se pudieron cargar");
// 	}
// }

// async function saveBooks(book) {
// 	try {
// 		await db.collection("books").doc().set(book);
// 	} catch (error) {
// 		console.log(error);
// 		throw new Error("El mensaje no se pudo enviar.");
// 	}
// }

// export { getBooks, saveBooks };
