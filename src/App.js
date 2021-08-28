import Navbar from "./components/Header/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import BooksListContainer from "./components/Main/BooksListContainer/BooksListContainer.js";
import ContactContainer from "./components/Main/ContactContainer/ContactContainer.js";
import CartContainer from "./components/Main/CartContainer/CartContainer.js";
import BookDetailsContainer from "./components/Main/BookDetailContainer/BookDetailsContainer";
import { getCategories } from "./model/model.js";

import "./global-styles/main.scss";

function App() {
	const [categories, setCategories] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		getCategories(setCategories).catch((err) => {
			console.log(err);
			setError(true);
		});
	}, []);

	return (
		<div className="App">
			<BrowserRouter>
				<header className={"header fixed-top"}>
					<Navbar categories={categories} />
				</header>

				<main>
					<Switch>
						<Route exact path="/">
							<BooksListContainer categories={categories} err={error} />
						</Route>

						<Route exact path="/categories/:categoryId">
							<BooksListContainer categories={categories} err={error} />
						</Route>

						<Route exact path="/book/:bookId">
							<BookDetailsContainer />
						</Route>

						<Route exact path="/contact">
							<ContactContainer />
						</Route>

						<Route exact path="/cart">
							<CartContainer />
						</Route>

						<Route path="*">
							<h2>Error 404 - Página no encontrada...</h2>
						</Route>
					</Switch>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
