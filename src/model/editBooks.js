import { db } from "./database";

db.collection("books")
	.get()
	.then((querySnapshot) => {
		querySnapshot.forEach((doc) => {
			const title = doc.title;

			db.collection("books")
				.doc(doc.id)
				.update({
					stock: prompt(`ingrese stock ${title}`),
				});
		});
	});
