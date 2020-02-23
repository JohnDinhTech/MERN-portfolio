import React from "react";
import Navbar from "./layout/Navbar/navbar.component";
import Hero from "./layout/Hero/hero.component";
import AboutMe from "./layout/AboutMe/aboutMe.component";
import Portfolio from "./layout/Portfolio/portfolio.component";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Hero />
			<AboutMe />
			<Portfolio />
		</Router>
	);
};

export default App;
