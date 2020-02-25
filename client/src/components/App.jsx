import React from "react";
import Navbar from "./layout/Navbar/navbar.component";
import Hero from "./layout/Hero/hero.component";
import AboutMe from "./layout/AboutMe/aboutMe.component";
import Portfolio from "./layout/Portfolio/portfolio.component";
import Contact from "./layout/Contact/contact.component";
import Footer from "./layout/Footer/footer.component";
import Preloader from "./layout/PreLoader/preLoader.component";
import Login from "./auth/Login.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { BRAND_BLUE } from "../constants/colors";
import "./App.css";
const App = () => {
	return (
		<Router>
			<Route exact path='/'>
				<Navbar />
				<Preloader />
				<Hero />
				<AboutMe />
				<Portfolio />
				<Contact />
				<Footer />
			</Route>
			<Route exact path='/login'>
				<Navbar
					style={{
						backgroundColor: BRAND_BLUE,
						position: "relative",
					}}
				/>

				<Login />
				<Footer
					style={{
						backgroundColor: BRAND_BLUE,
						// position: "absolute",
						// bottom: 0,
						// width: "100%",
					}}
				/>
			</Route>
		</Router>
	);
};

export default App;
