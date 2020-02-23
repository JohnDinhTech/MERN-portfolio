import React from "react";
import Navbar from "./layout/Navbar/navbar.component";
import Hero from "./layout/Hero/hero.component";
import AboutMe from "./layout/AboutMe/aboutMe.component";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Hero />
			<AboutMe />
			<div style={{ backgroundColor: "black" }}>Some more content</div>
		</Router>
	);
};

export default App;
