import React from "react";
import Button from "../../utils/Button/button.component";
import { LIGHT_GREEN } from "../../../constants/colors";
import logo from "../../../images/signiture.png";
import "./navbar.styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className='navbar container'>
			<Link to='/' className='logo'>
				<h2>John Dinh</h2>
				<img src={logo} alt="John Dinh's Signiture" />
			</Link>
			<ul>
				<li>
					<Link to='/'>ABOUT</Link>
				</li>
				<li>
					<Link to='/'>PORTFOLIO</Link>
				</li>
				<li>
					<Button color={LIGHT_GREEN} text='GET IN TOUCH' />
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
