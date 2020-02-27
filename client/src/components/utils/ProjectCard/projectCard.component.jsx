import React, { useState } from "react";
import { WHITE, DARK_BLUE } from "../../../constants/colors";
import "./projectCard.styles.css";
import { selectProject } from "../../../actions";
import { connect } from "react-redux";
const ProjectCard = ({ image, title, text, id, selectProject }) => {
	const handleClick = () => {
		selectProject(id);
	};
	return (
		<div
			className='project-card-container'
			id={id}
			onClick={handleClick}
			style={{
				height: "16.8rem",
				width: "20.2rem",
				backgroundColor: WHITE,
				borderRadius: "1rem",
				position: "relative",
				boxShadow: "0 3px 6px rgba(0, 0, 0, 0.5)",
				transition: "1s all ease",
			}}
		>
			<div
				className='project-card-image'
				style={{
					width: "17.6rem",
					height: "11rem",
					borderRadius: "1rem",
					position: "absolute",
					top: "-1rem",
					left: "50%",
					transform: "translateX(-50%)",
					overflow: "hidden",
					boxShadow: "0 3px 6px rgba(0, 0, 0, 0.5)",
				}}
			>
				<img
					style={{
						width: "100%",
						height: "100%",
					}}
					src={image}
					alt="One of John's previous project"
				/>
			</div>
			<div
				className='project-card-text'
				style={{
					position: "absolute",
					bottom: "2.3rem",
					color: DARK_BLUE,
					textAlign: "left",
					left: "1.3rem",
				}}
			>
				<h1>{title}</h1>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default connect(null, {
	selectProject,
})(ProjectCard);
