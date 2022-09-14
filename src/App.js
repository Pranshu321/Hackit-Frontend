import React from "react";
import Home from "./components/home";
import "./assets/scss/Home/styles.scss";
import "./assets/scss/main.scss";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/contact";
import About from "./components/about";
import ChatBot from "./components/ChatBot";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/chatbot" element={<ChatBot />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
