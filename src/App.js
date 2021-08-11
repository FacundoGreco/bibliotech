import Navbar from "./components/Header/Navbar";
import ItemListContainer from "./components/Container/ItemListContainer";
import "./global-styles/main.scss";

function App() {
	return (
		<div className="App">
			<header className={"header fixed-top"}>
				<Navbar/>
			</header>

			<main>
				<ItemListContainer titleText={"Aquí estarán los productos."}/>
			</main>
		</div>
	);
}

export default App;
