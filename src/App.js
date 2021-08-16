import Navbar from "./components/Header/Navbar";
import ItemListContainer from "./components/Container/BooksListContainer";
import "./global-styles/main.scss";

function App() {
	return (
		<div className="App">
			<header className={"header fixed-top"}>
				<Navbar />
			</header>

			<main>
				<ItemListContainer />
			</main>
		</div>
	);
}

export default App;
