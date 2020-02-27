import React, { Fragment, useEffect } from "react";
import Button from "../../utils/Button/button.component";
import { LIGHT_GREEN, DARK_BLUE, BRAND_BLUE } from "../../../constants/colors";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../../images/signiture.png";
import "./navbar.styles.css";
import { connect } from "react-redux";
import MobileMenuButton from "../../utils/MobileMenuButton/mobileMenuButton";
import { particlesConfig } from "../../../particlesConfig";
import { Particles } from "react-particles-js";
import { setScrollY, changeNavColor, deselectProject } from "../../../actions";

const Navbar = ({
	mediaType,
	mobileMenu,
	setScrollY,
	scrollY,
	style,
	changeNavColor,
	navColors,
	deselectProject,
}) => {
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScrollY(window.pageYOffset);
		});
	}, []);

	switch (mediaType) {
		case "smallTablet":
		case "mobile":
		case "smallMobile":
			return (
				<Fragment>
					<nav
						style={{
							backgroundColor: DARK_BLUE,
							position: navColors.navPosition,
							...style,
						}}
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
						<RouterLink
							to='/'
							onClick={() => {
								scroll.scrollToTop();
								changeNavColor(DARK_BLUE);
								deselectProject();
							}}
							className='logo'
						>
							<h2>John Dinh</h2>
							<img src={logo} alt="John Dinh's Signiture" />
						</RouterLink>
						<ul>
							<li>
								<Link
									to='about-me'
									smooth={true}
									duration={500}
								>
									ABOUT
								</Link>
							</li>
							<li>
								<Link
									to='portfolio'
									smooth={true}
									duration={500}
								>
									PORTFOLIO
								</Link>
							</li>

							<li>
								<Link to='contact' smooth={true} duration={500}>
									<Button
										color={BRAND_BLUE}
										text='GET IN TOUCH'
										fontWeight='800'
									/>
								</Link>
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
						style={{
							backgroundColor: DARK_BLUE,
							position: navColors.navPosition,
							...style,
						}}
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
						<RouterLink
							to='/'
							onClick={() => {
								scroll.scrollToTop();
								changeNavColor(DARK_BLUE);
								deselectProject();
							}}
							className='logo'
						>
							<h2>John Dinh</h2>
							<img src={logo} alt="John Dinh's Signiture" />
						</RouterLink>
						<ul>
							<li>
								<Link
									to='about-me'
									smooth={true}
									duration={500}
								>
									ABOUT
								</Link>
							</li>
							<li>
								<Link
									to='portfolio'
									smooth={true}
									duration={500}
								>
									PORTFOLIO
								</Link>
							</li>

							<li>
								<Link to='contact' smooth={true} duration={500}>
									<Button
										color={DARK_BLUE}
										text='GET IN TOUCH'
										fontWeight='800'
									/>
								</Link>
							</li>
						</ul>
					</nav>
					<MobileMenuButton menuState={mobileMenu} />
				</Fragment>
			);
		default:
			return (
				<nav
					className='navbar container'
					style={{
						backgroundColor:
							scrollY === 0 ? navColors.navColor : BRAND_BLUE,
						position: navColors.navPosition,
						...style,
					}}
				>
					<RouterLink
						to='/'
						onClick={() => {
							scroll.scrollToTop();
							changeNavColor(DARK_BLUE);
							deselectProject();
						}}
						className='logo'
					>
						<h2>John Dinh</h2>
						<img src={logo} alt="John Dinh's Signiture" />
					</RouterLink>
					<ul>
						<li>
							<Link
								to='about-me'
								smooth={true}
								duration={500}
								offset={-98}
							>
								ABOUT
							</Link>
						</li>
						<li>
							<Link
								to='portfolio'
								smooth={true}
								duration={500}
								offset={-100}
							>
								PORTFOLIO
							</Link>
						</li>
						<li>
							<RouterLink to='/login'>LOGIN</RouterLink>
						</li>
						<li>
							<Link
								to='contact'
								smooth={true}
								duration={500}
								offset={-98}
							>
								<Button
									color={LIGHT_GREEN}
									text='GET IN TOUCH'
								/>
							</Link>
						</li>
					</ul>
				</nav>
			);
	}
};

const mapStateToProps = ({ browser, mobileMenu, scrollY, navColors }) => ({
	...browser,
	mobileMenu,
	scrollY,
	navColors,
});

export default connect(mapStateToProps, {
	setScrollY,
	changeNavColor,
	deselectProject,
})(Navbar);
