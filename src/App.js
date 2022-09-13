import React from "react";
import Home from "./components/home";
import "./assets/scss/Home/styles.scss";
import "./assets/scss/main.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Contact from "./components/contact";
import Footer from "./components/footer";
import About from "./components/about";


function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
      <Footer />
		</>
	);
}

export default App;
