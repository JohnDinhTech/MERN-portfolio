import React from "react";
import "./hero.styles.css";
import {
	BRAND_BLUE,
	DARK_BLUE,
	WHITE,
	LIGHT_GREEN,
} from "../../../constants/colors";
import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";
import heroImage from "../../../images/me.jpg";
import Particles from "react-particles-js";
import Button from "../../utils/Button/button.component";
import { loadImage } from "../../../actions";
import { particlesConfig } from "../../../particlesConfig";
import { connect } from "react-redux";

const Hero = ({ mediaType, loadImage }) => {
	switch (mediaType) {
		case "smallTablet":
		case "mobile":
		case "smallMobile":
			return (
				<section
					className='hero-mobile container'
					style={{
						backgroundColor: DARK_BLUE,
						padding: "4rem 2rem",
						height: "100%",
					}}
				>
					<img
						className='mobile-hero-image'
						src={heroImage}
						alt='John Dinh eating sushi'
					/>

					<div className='hero-text-mobile'>
						<h3
							style={{
								color: WHITE,
							}}
						>
							HI, I'M JOHN
						</h3>
						<h1
							style={{
								color: WHITE,
							}}
						>
							A
							<span
								className='mern_text'
								style={{
									color: BRAND_BLUE,
									opacity: 1,
									animation: "none",
								}}
							>
								MERN
							</span>
							STACK DEVELOPER
						</h1>
						<h3 style={{ color: WHITE }}>
							I TRANSFORM IDEAS INTO MODERN WEBSITES & WEB
							APPLICATIONS
						</h3>
					</div>
				</section>
			);
		default:
			return (
				<section className='hero'>
					{/* Left Side of Hero Section */}

					<div className='particles'>
						<Particles
							style={{
								backgroundColor: BRAND_BLUE,
							}}
							params={particlesConfig}
						/>
					</div>

					<div className='hero-text'>
						<h3
							style={{
								color: DARK_BLUE,
							}}
						>
							HI, I'M JOHN
						</h3>
						<h1
							style={{
								color: WHITE,
							}}
						>
							A
							<span
								className='mern_text'
								style={{
									color: DARK_BLUE,
								}}
							>
								MERN
							</span>
							STACK DEVELOPER
						</h1>
						<h3>
							I TRANSFORM IDEAS INTO MODERN WEBSITES & WEB
							APPLICATIONS
						</h3>
						<Link
							to='contact'
							smooth={true}
							duration={500}
							offset={mediaType === "tablet" ? 0 : -100}
						>
							<Button color={LIGHT_GREEN} text={"GET IN TOUCH"} />
						</Link>
						<Link
							to='portfolio'
							smooth={true}
							duration={500}
							offset={mediaType === "tablet" ? 0 : -100}
						>
							<Button color={DARK_BLUE} text={"VIEW MY WORK"} />
						</Link>
					</div>

					{/* Right Side of Hero Section */}
					<div className='hero-image'>
						<div className='overlay'></div>
						<img
							src={heroImage}
							alt='John Dinh eating sushi'
							onLoad={loadImage}
						/>
					</div>
				</section>
			);
	}
};

const mapStateToProps = ({ browser }) => ({
	...browser,
});

export default connect(mapStateToProps, {
	loadImage,
})(Hero);
