import React from "react";
import "./App.css";

// Context
import AppContextProvider from "./context/AppContext";

import Navbar from "./components/Navbar";
import Product from "./components/pages/Product";

function App() {
	return (
		<div className="App">
			<AppContextProvider>
				<Navbar />
				<Product />
			</AppContextProvider>
		</div>
	);
}

export default App;
