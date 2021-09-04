import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BooksProvider } from "./components/Contexts/BooksContext";
import { CartProvider } from "./components/Contexts/CartContext";
import Navbar from "./components/Header/Navbar";
import BooksListContainer from "./components/Main/BooksListContainer/BooksListContainer.js";
import ContactContainer from "./components/Main/ContactContainer/ContactContainer.js";
import CartContainer from "./components/Main/CartContainer/CartContainer.js";
import BookDetailsContainer from "./components/Main/BookDetailContainer/BookDetailsContainer";

import "./global-styles/main.scss";

function App() {
	return (
		<BooksProvider>
			<CartProvider>
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
			</CartProvider>
		</BooksProvider>
	);
}
export default App;
