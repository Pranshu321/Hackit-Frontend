import React from "react";
import Home from "./components/home";
import "./assets/scss/Home/styles.scss";
import "./assets/scss/main.scss";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/contact";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import ChatBot from "./components/ChatBot";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/chatbot" element={<ChatBot />} />
			</Routes>
		</>
	);
}

export default App;
