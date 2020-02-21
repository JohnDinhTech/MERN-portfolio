import React from "react";
import "./hero.styles.css";
import {
	BRAND_GREEN,
	DARK_BLUE,
	WHITE,
	LIGHT_GREEN,
} from "../../../constants/colors";
import heroImage from "../../../images/me.jpg";
import Particles from "react-particles-js";
import Button from "../../utils/Button/button.component";

const particlesConfig = {
	particles: {
		number: {
			value: 250,
		},
		size: {
			value: 4,
		},
	},
	interactivity: {
		events: {
			onhover: {
				enable: true,
				mode: "repulse",
			},
		},
	},
};

const Hero = () => {
	return (
		<section className='hero'>
			{/* Left Side of Hero Section */}

			<div className='particles'>
				<Particles
					style={{
						backgroundColor: BRAND_GREEN,
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
					A{" "}
					<span
						style={{
							color: DARK_BLUE,
						}}
					>
						MERN
					</span>{" "}
					STACK DEVELOPER
				</h1>
				<h3>
					I TRANSFORM IDEAS INTO MODERN WEBSITES & WEB APPLICATIONS
				</h3>
				<Button color={LIGHT_GREEN} text={"GET IN TOUCH"} />
				<Button color={DARK_BLUE} text={"VIEW MY WORK"} />
			</div>

			{/* Right Side of Hero Section */}
			<div className='hero-image'>
				<div className='overlay'></div>
				<img src={heroImage} alt='John Dinh eating sushi' />
			</div>
		</section>
	);
};

export default Hero;
