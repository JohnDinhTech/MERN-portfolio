import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeNavColor } from "../../../actions";
import { CHANGE_NAV_POSITION } from "../../../actions/types";
import { Link } from "react-router-dom";
import { DARK_BLUE, WHITE, BRAND_BLUE } from "../../../constants/colors";
import Button from "../../utils/Button/button.component";
import Portfolio from "../Portfolio/portfolio.component";
import { SpringGrid } from "react-stonecutter";
import ProjectCard from "../../utils/ProjectCard/projectCard.component";
import { Redirect } from "react-router-dom";
const truncateString = (str, num = 25) => {
	if (str.length <= num) {
		return str;
	}
	return str.slice(0, num) + "...";
};

const Dashboard = ({ projects, selectedProject }) => {
	useEffect(() => {
		changeNavColor(CHANGE_NAV_POSITION, { position: "relative" });
	}, []);
	if (selectedProject) {
		return <Redirect to='/dashboard/edit' />;
	}
	return (
		<section
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
					fontSize: "5.7rem",
				}}
			>
				Welcome Back John
			</h1>

			<Button color={BRAND_BLUE}>
				<Link
					style={{
						color: WHITE,
					}}
					to='/dashboard/add'
				>
					Add Project
				</Link>
			</Button>
			<SpringGrid
				component='div'
				columns={4}
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
				{projects.map(({ title, description, image, _id }, index) => (
					<li key={index}>
						<ProjectCard
							id={_id}
							title={title}
							text={truncateString(description)}
							image={image}
						/>
					</li>
				))}
			</SpringGrid>
		</section>
	);
};

const mapStateToProps = ({ projects, selectedProject }) => ({
	projects,
	selectedProject,
});
export default connect(mapStateToProps, {
	changeNavColor,
})(Dashboard);
