import React from "react";
import Button from "../../utils/Button/button.component";
import { BRAND_GREEN } from "../../../constants/colors";
import logo from "../../../images/signiture.png";
import "./navbar.styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className='navbar container'>
			<a className='logo'>
				<h2>John Dinh</h2>
				<img src={logo} alt="John Dinh's Signiture" />
			</a>
			<ul>
				<li>
					<Link>ABOUT</Link>
				</li>
				<li>
					<Link>PORTFOLIO</Link>
				</li>
				<li>
					<Button color={BRAND_GREEN} text='GET IN TOUCH' />
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
