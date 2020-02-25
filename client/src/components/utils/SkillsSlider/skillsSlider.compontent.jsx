import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import Card from "../Card/card.component";
import "pure-react-carousel/dist/react-carousel.es.css";

import designIcon from "../../../images/icons/design.png";
import developmentIcon from "../../../images/icons/development.png";
import globeIcon from "../../../images/icons/globe.png";

const slidersText = [
	{
		title: "Design",
		text:
			"I show you every step of the design process so I can use your feedback to create the best design possible for you.",
		icon: designIcon,
	},
	{
		title: "Development",
		text:
			"I start creating the site's backend API if needed. Then I create the front end that is pixel perfect to the design as well as animated to bring the site to life.",
		icon: developmentIcon,
	},
	{
		title: "Deployment",
		text:
			"After development is complete, I then get your site running on the desired domain. For the following month, I'll make sure your site is error free and good to go.",
		icon: globeIcon,
	},
];

const SkillsSlider = ({ visibleSlides }) => {
	return (
		<CarouselProvider
			naturalSlideWidth={241}
			naturalSlideHeight={307}
			totalSlides={3}
			visibleSlides={visibleSlides}
			interval={5000}
			isPlaying={true}
			infinite={true}
		>
			<Slider className='slides-container'>
				{slidersText.map((slide, index) => (
					<Slide key={index} index={index} className='slide'>
						<Card data={slide} />
					</Slide>
				))}
			</Slider>
		</CarouselProvider>
	);
};

export default SkillsSlider;
