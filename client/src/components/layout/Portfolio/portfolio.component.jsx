import React, { Fragment, useState } from "react";
import { DARK_BLUE, WHITE, BRAND_BLUE } from "../../../constants/colors";
import InputBar from "../../utils/InputBar/inputBar.component";
import ProjectCard from "../../utils/ProjectCard/projectCard.component";
import { SpringGrid } from "react-stonecutter";
import { LIGHT_GREEN } from "../../../constants/colors";
import Button from "../../utils/Button/button.component";
import ProjectModal from "../../utils/ProjectModal/projectModal.component";
import { connect } from "react-redux";

const truncateString = (str, num = 25) => {
	if (str.length <= num) {
		return str;
	}
	return str.slice(0, num) + "...";
};

const Portfolio = ({
	smallMobile,
	mobile,
	smallTablet,
	tablet,
	desktop,
	infinity,
	projects,
	selectedProject,
}) => {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredProjects = projects.filter((project) => {
		let included = project.tags.find((tag) => tag.includes(searchTerm));
		return included ? true : false;
	});

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
			<ProjectModal data={selectedProject} />
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
					<InputBar
						style={{
							boxShadow: "0 3px 6px rgba(0, 0, 0, 0.5)",
						}}
						type='search'
						placeholder='Example: JavaScript'
						width='41.4rem'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
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
							zIndex: "0",
						}}
					>
						{filteredProjects
							.slice(0, tablet ? 4 : 8)
							.map(
								({ title, description, image, _id }, index) => (
									<li key={index}>
										<ProjectCard
											id={_id}
											title={title}
											text={truncateString(description)}
											image={image}
										/>
									</li>
								)
							)}
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
					{filteredProjects
						.slice(0, 2)
						.map(({ title, description, image, _id }, index) => (
							<li key={_id}>
								<ProjectCard
									id={_id}
									title={title}
									text={truncateString(description)}
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

const mapPropsToState = ({ browser, projects, selectedProject }) => ({
	...browser.lessThan,
	projects,
	selectedProject,
});

export default connect(mapPropsToState)(Portfolio);
