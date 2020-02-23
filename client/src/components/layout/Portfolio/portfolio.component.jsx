import React, { Fragment } from "react";
import { DARK_BLUE, WHITE, BRAND_BLUE } from "../../../constants/colors";
import InputBar from "../../utils/InputBar/inputBar.component";
import ProjectCard from "../../utils/ProjectCard/projectCard.component";
import testImage from "../../../images/website.png";
import { SpringGrid } from "react-stonecutter";
import { LIGHT_GREEN } from "../../../constants/colors";
import Button from "../../utils/Button/button.component";
import { connect } from "react-redux";

const projectData = [
	{
		title: "Mache",
		text: "Ipsum has been the industry's...",
		image: testImage,
	},
	{
		title: "Mache",
		text: "Ipsum has been the industry's...",
		image: testImage,
	},
	{
		title: "Mache",
		text: "Ipsum has been the industry's...",
		image: testImage,
	},
	{
		title: "Mache",
		text: "Ipsum has been the industry's...",
		image: testImage,
	},
	{
		title: "Mache",
		text: "Ipsum has been the industry's...",
		image: testImage,
	},
	{
		title: "Mache",
		text: "Ipsum has been the industry's...",
		image: testImage,
	},
	{
		title: "Mache",
		text: "Ipsum has been the industry's...",
		image: testImage,
	},
	{
		title: "Mache",
		text: "Ipsum has been the industry's...",
		image: testImage,
	},
];

const Portfolio = ({
	smallMobile,
	mobile,
	smallTablet,
	tablet,
	desktop,
	infinity,
}) => {
	return (
		<section
			className='portfolio container'
			style={{
				backgroundColor: DARK_BLUE,
				color: WHITE,
				marginTop: "-1.7rem",
				textAlign: "center",
				paddingTop: "3rem",
			}}
		>
			<h1
				style={{
					fontSize: mobile ? "4.6rem" : "5.7rem",
				}}
			>
				PORTFOLIO
			</h1>
			{!mobile && (
				<Fragment>
					<label
						style={{
							display: "block",
							color: BRAND_BLUE,
							fontSize: "1.6rem",
							marginBottom: "2rem",
						}}
					>
						Search by skills used
					</label>
					<InputBar type='search' placeholder='Example: JavaScript' />
					<SpringGrid
						component='div'
						columns={tablet ? 2 : 4}
						columnWidth={202}
						gutterWidth={14}
						gutterHeight={25}
						itemHeight={186}
						springConfig={{ stiffness: 170, damping: 26 }}
						style={{
							margin: "0 auto",
							marginTop: "3.6rem",
						}}
					>
						{projectData
							.slice(0, tablet ? 4 : 8)
							.map(({ title, text, image }, index) => (
								<li key={index}>
									<ProjectCard
										title={title}
										text={text}
										image={image}
									/>
								</li>
							))}
					</SpringGrid>
				</Fragment>
			)}

			{mobile && (
				<SpringGrid
					component='div'
					columns={1}
					columnWidth={202}
					gutterWidth={14}
					gutterHeight={25}
					itemHeight={186}
					springConfig={{ stiffness: 170, damping: 26 }}
					style={{
						margin: "0 auto",
						marginTop: "3.6rem",
					}}
				>
					{projectData
						.slice(0, 2)
						.map(({ title, text, image }, index) => (
							<li key={index}>
								<ProjectCard
									title={title}
									text={text}
									image={image}
								/>
							</li>
						))}
				</SpringGrid>
			)}

			<Button
				style={{
					margin: "4rem auto",
				}}
				color={LIGHT_GREEN}
				text='View All Work'
			/>
		</section>
	);
};

const mapPropsToState = ({ browser }) => ({ ...browser.lessThan });

export default connect(mapPropsToState)(Portfolio);
