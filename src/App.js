import Navbar from "./components/Header/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BooksListContainer from "./components/Main/BooksListContainer/BooksListContainer.js";
import ContactContainer from "./components/Main/ContactContainer/ContactContainer.js";
import CartContainer from "./components/Main/CartContainer/CartContainer.js";
import "./global-styles/main.scss";
import BookDetailContainer from "./components/Main/BookDetailContainer/BookDetailContainer";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<header className={"header fixed-top"}>
					<Navbar />
				</header>

				<main>
					<Switch>
						<Route exact path="/">
							<BooksListContainer />
						</Route>

						<Route exact path="/categories/:categoryId">
							<BooksListContainer />
						</Route>

						<Route exact path="/item/:itemId">
							<BookDetailContainer />
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
