import React, { Fragment } from "react";
import Navbar from "./layout/Navbar/navbar.component";
import Hero from "./layout/Hero/hero.component";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Hero />
		</Router>
	);
};

export default App;
