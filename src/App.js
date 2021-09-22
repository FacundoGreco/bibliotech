import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BooksProvider } from "./components/Contexts/BooksContext";
import { CartProvider } from "./components/Contexts/CartContext";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Header/Navbar";
import BooksListContainer from "./components/Main/BooksListContainer/BooksListContainer.js";
import ContactContainer from "./components/Main/ContactContainer/ContactContainer.js";
import BookDetailsContainer from "./components/Main/BookDetailsContainer/BookDetailsContainer";
import CartContainer from "./components/Main/CartContainer/CartContainer.js";
import CheckoutContainer from "./components/Main/CheckoutContainer/CheckoutContainer";
import AdminContainer from "./components/Main/AdminContainer/AdminContainer";

import "./global-styles/main.scss";

function App() {
	return (
		<BooksProvider>
			<CartProvider>
				<div className="App">
					<BrowserRouter>
						<ScrollToTop />
						<header className={"header fixed-top"}>
							<Navbar />
						</header>

						<main>
							<Switch>
								<Route exact path="/">
									<BooksListContainer />
								</Route>

								<Route exact path="/bibliotech">
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

								<Route exact path="/checkout">
									<CheckoutContainer />
								</Route>

								<Route exact path="/admin">
									<AdminContainer />
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
