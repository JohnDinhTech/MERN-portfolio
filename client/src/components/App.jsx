import React, { useEffect } from "react";
import Navbar from "./layout/Navbar/navbar.component";
import Hero from "./layout/Hero/hero.component";
import AboutMe from "./layout/AboutMe/aboutMe.component";
import Portfolio from "./layout/Portfolio/portfolio.component";
import Contact from "./layout/Contact/contact.component";
import Footer from "./layout/Footer/footer.component";
import Preloader from "./layout/PreLoader/preLoader.component";
import Login from "./auth/Login.component";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Routes from "./routing/Routes/routes.component";
import setAuthToken from "../utils/setAuthToken";
import { loadUser, fetchProjects } from "../actions";
import Alert from "./utils/Alert/alert.component";
import store from "../store";
const App = () => {
	useEffect(() => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
			store.dispatch(loadUser());
		}
		store.dispatch(fetchProjects());
	}, []);
	return (
		<Router>
			<Navbar />
			<Route exact path='/'>
				<Preloader />
				<Hero />
				<AboutMe />
				<Portfolio />
				<Contact />
			</Route>
			<Route exact path='/portfolio'>
				<Portfolio />
			</Route>
			<Route exact path='/login'>
				<Alert />

				<Login />
			</Route>
			<Route component={Routes} />
			<Footer />
		</Router>
	);
};

export default App;
