import React from "react";
import aboutImage from "../../../images/me2.png";
import "./aboutMe.styles.css";
import { WHITE, LIGHT_GREEN } from "../../../constants/colors";
import SkillsSlider from "../../SkillsSlider/skillsSlider.compontent";
import { connect } from "react-redux";
const AboutMe = ({ mediaType }) => {
	switch (mediaType) {
		case "infinity":
			return (
				<section className='about-me container'>
					<img
						className='about-me-image'
						src={aboutImage}
						alt='John programming at a desk with a large monitor'
					/>
					<div
						className='about-me-text'
						style={{ backgroundColor: WHITE }}
					>
						<h1>ABOUT ME</h1>
						<p>
							I create simple to complex websites from concept to
							deployment. Delivering positive UX through websites
							has always been a passion of mine. Whether I'm
							creating an e-commerce site or a brick and mortar
							store, I always dedicate 100% of myself to the
							project.
						</p>
					</div>
					<div className='the-process'>
						<h1 className='the-process-title'>THE PROCESS</h1>
						<SkillsSlider visibleSlides={2.5} />
					</div>
				</section>
			);
		case "desktop":
			return (
				<section
					className='about-me about-me-desktop container'
					style={{ backgroundColor: LIGHT_GREEN }}
				>
					<div className='about-me-text-desktop'>
						<img
							className='about-me-image-desktop'
							src={aboutImage}
							alt='John programming at a desk with a large monitor'
						/>

						<div
							className='about-me-text'
							style={{ backgroundColor: WHITE }}
						>
							<h1>ABOUT ME</h1>
							<p>
								I create simple to complex websites from concept
								to deployment. Delivering positive UX through
								websites has always been a passion of mine.
								Whether I'm creating an e-commerce site or a
								brick and mortar store, I always dedicate 100%
								of myself to the project.
							</p>
						</div>
					</div>

					<div className='the-process-desktop'>
						<h1 className='the-process-title-desktop'>
							THE PROCESS
						</h1>
						<SkillsSlider visibleSlides={3} />
					</div>
				</section>
			);
		case "tablet":
			return (
				<section
					className='about-me about-me-desktop container'
					style={{ backgroundColor: LIGHT_GREEN }}
				>
					<div className='about-me-text-desktop'>
						<img
							className='about-me-image-desktop'
							src={aboutImage}
							alt='John programming at a desk with a large monitor'
						/>

						<div
							className='about-me-text'
							style={{
								backgroundColor: WHITE,
							}}
						>
							<h1 style={{ fontSize: "3rem" }}>ABOUT ME</h1>
							<p>
								I create simple to complex websites from concept
								to deployment. Delivering positive UX through
								websites has always been a passion of mine.
								Whether I'm creating an e-commerce site or a
								brick and mortar store, I always dedicate 100%
								of myself to the project.
							</p>
						</div>
					</div>

					<div className='the-process-desktop'>
						<h1 className='the-process-title-desktop'>
							THE PROCESS
						</h1>
						<SkillsSlider visibleSlides={3} />
					</div>
				</section>
			);
		case "smallTablet":
			return (
				<section
					className='about-me about-me-desktop small-tablet'
					style={{ backgroundColor: LIGHT_GREEN }}
				>
					<div
						className='about-me-text-desktop'
						style={{ height: "100%" }}
					>
						<img
							className='about-me-image-desktop'
							src={aboutImage}
							alt='John programming at a desk with a large monitor'
						/>

						<div
							className='about-me-text'
							style={{
								backgroundColor: WHITE,
							}}
						>
							<h1 style={{ fontSize: "3rem" }}>ABOUT ME</h1>
							<p style={{ width: "100%" }}>
								I create simple to complex websites from concept
								to deployment. Delivering positive UX through
								websites has always been a passion of mine.
								Whether I'm creating an e-commerce site or a
								brick and mortar store, I always dedicate 100%
								of myself to the project.
							</p>
						</div>
					</div>

					<div className='the-process-desktop'>
						<h1
							style={{ fontSize: "3rem" }}
							className='the-process-title-desktop'
						>
							THE PROCESS
						</h1>
						<SkillsSlider visibleSlides={1} />
					</div>
				</section>
			);
		case "mobile":
			return (
				<section
					className='about-me about-me-desktop small-tablet'
					style={{ backgroundColor: LIGHT_GREEN }}
				>
					<div
						className='about-me-text-desktop'
						style={{ height: "100%", textAlign: "center" }}
					>
						<div
							className='about-me-text'
							style={{
								backgroundColor: WHITE,
								height: "100%",
							}}
						>
							<h1 style={{ fontSize: "3rem" }}>ABOUT ME</h1>
							<p style={{ width: "100%" }}>
								I create simple to complex websites from concept
								to deployment. Delivering positive UX through
								websites has always been a passion of mine.
								Whether I'm creating an e-commerce site or a
								brick and mortar store, I always dedicate 100%
								of myself to the project.
							</p>
						</div>
					</div>

					<div className='the-process-desktop'>
						<h1
							style={{ fontSize: "3rem" }}
							className='the-process-title-desktop'
						>
							THE PROCESS
						</h1>
						<SkillsSlider visibleSlides={1} />
					</div>
				</section>
			);
		default:
			return <div>hi</div>;
	}
};

const mapStateToProps = ({ browser }) => ({
	...browser,
});

export default connect(mapStateToProps)(AboutMe);
