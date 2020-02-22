import React, { Fragment } from "react";
import Button from "../../utils/Button/button.component";
import {
	LIGHT_GREEN,
	DARK_BLUE,
	BRAND_BLUE,
	DARK_GREEN,
} from "../../../constants/colors";
import logo from "../../../images/signiture.png";
import "./navbar.styles.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MobileMenuButton from "../../utils/MobileMenuButton/mobileMenuButton";
import { particlesConfig } from "../../../particlesConfig";
import { Particles } from "react-particles-js";

const Navbar = ({ mediaType, mobileMenu }) => {
	switch (mediaType) {
		case "mobile":
			return (
				<Fragment>
					<nav
						style={{ backgroundColor: DARK_BLUE }}
						className={`navbar navbar-mobile ${
							mobileMenu
								? "navbar-mobile-open"
								: "navbar-mobile-closed"
						}`}
					>
						<Particles
							className='menu-background'
							style={{
								backgroundColor: DARK_BLUE,
							}}
							params={particlesConfig}
						/>
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
								<Button
									color={BRAND_BLUE}
									text='GET IN TOUCH'
									fontWeight='800'
								/>
							</li>
						</ul>
					</nav>
					<MobileMenuButton menuState={mobileMenu} />
				</Fragment>
			);
		case "tablet":
			return (
				<Fragment>
					<nav
						style={{ backgroundColor: DARK_BLUE }}
						className={`navbar navbar-tablet ${
							mobileMenu
								? "navbar-tablet-open"
								: "navbar-tablet-closed"
						}`}
					>
						<Particles
							className='menu-background'
							style={{
								backgroundColor: DARK_BLUE,
							}}
							params={particlesConfig}
						/>
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
								<Button
									color={BRAND_BLUE}
									text='GET IN TOUCH'
									fontWeight='800'
								/>
							</li>
						</ul>
					</nav>
					<MobileMenuButton menuState={mobileMenu} />
				</Fragment>
			);
		default:
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
	}
};

const mapStateToProps = ({ browser, mobileMenu }) => ({
	...browser,
	mobileMenu,
});

export default connect(mapStateToProps, {})(Navbar);
