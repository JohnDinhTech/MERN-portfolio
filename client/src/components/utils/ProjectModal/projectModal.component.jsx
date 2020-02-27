import React, { Fragment } from "react";
import {
	WHITE,
	DARK_BLUE,
	DARK_GREEN,
	BRAND_BLUE,
} from "../../../constants/colors";
import Moment from "react-moment";
import Button from "../Button/button.component";
import "./projectModal.styles.css";
import XButton from "../XButton/xButton.component";
import { deselectProject } from "../../../actions";
import { connect } from "react-redux";
const ProjectModal = ({ data, id, deselectProject }) => {
	if (!data) {
		return null;
	}
	const { title, image, description, style, date, github, link } = data;
	console.log(data);
	return (
		<Fragment>
			<div className='overlay-fixed'></div>
			<div
				className='container'
				style={{
					backgroundColor: WHITE,
					borderRadius: "1rem",
					position: "fixed",
					width: "80%",
					height: "90%",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					boxShadow: "0 3px 6px rgba(0, 0, 0, 0.5)",
					transition: "1s all ease",
					zIndex: "9999",
					...style,
				}}
			>
				<XButton onClick={() => deselectProject()} />
				<div
					className='project-card-image'
					style={{
						height: "25%",
						width: "30%",
						borderRadius: "1rem",
						position: "absolute",
						top: "-4rem",
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
						position: "relative",
						top: "25%",
						color: DARK_BLUE,
					}}
				>
					<h1
						style={{
							fontSize: "6rem",
						}}
					>
						{title}
					</h1>
					<Moment>{date}</Moment>

					<p
						style={{
							marginTop: "2rem",
							fontSize: "2rem",
							lineHeight: 2,
						}}
					>
						{description}
					</p>

					<ul
						className='project-modal-links'
						style={{
							position: "absolute",
							top: "100%",
							left: "50%",
							transform: "translateX(-50%)",
						}}
					>
						<li>
							<Button
								isLink={true}
								color={DARK_BLUE}
								rel='noopener noreferrer'
								target='_blank'
								href={github}
							>
								GitHub
							</Button>
						</li>
						<li>
							<Button
								isLink={true}
								color={DARK_GREEN}
								rel='noopener noreferrer'
								target='_blank'
								href={link}
							>
								Link to Project
							</Button>
						</li>
						<li>
							<Button
								isLink={true}
								color={BRAND_BLUE}
								rel='noopener noreferrer'
								target='_blank'
								href={link}
							>
								Case Study
							</Button>
						</li>
					</ul>
				</div>
			</div>
		</Fragment>
	);
};

export default connect(null, {
	deselectProject,
})(ProjectModal);
