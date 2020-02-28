import React, { useState } from "react";
import { WHITE, DARK_BLUE, BRAND_BLUE } from "../../../constants/colors";
import InputBar from "../../utils/InputBar/inputBar.component";
import Button from "../../utils/Button/button.component";
import { connect } from "react-redux";
import { updateProject, deleteProject } from "../../../actions";

const tagsToString = (tags) => {
	let str = "";
	for (let i = 0; i < tags.length; i++) {
		str += tags[i] + (i === tags.length - 1 ? "" : ", ");
	}
	return str.trim();
};

const formatDate = (date) => {
	let d = new Date(date),
		month = "" + (d.getMonth() + 1),
		day = "" + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = "0" + month;
	if (day.length < 2) day = "0" + day;

	return [year, month, day].join("-");
};

const DashboardEdit = ({ updateProject, selectedProject, deleteProject }) => {
	const {
		title,
		description,
		casestudy,
		image,
		github,
		link,
		tags,
		date,
		_id,
	} = selectedProject;
	const [formData, setFormData] = useState({
		_id,
		title,
		description,
		casestudy,
		image,
		github,
		link,
		tags: tagsToString(tags),
		date: formatDate(date),
	});
	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		updateProject(formData);
	};
	return (
		<section
			style={{
				backgroundColor: DARK_BLUE,
				color: WHITE,
				marginTop: "-1.7rem",
				textAlign: "center",
				paddingTop: "3rem",
				paddingBottom: "3rem",
			}}
		>
			<h1
				style={{
					fontSize: "5.7rem",
				}}
			>
				{`${selectedProject ? "Edit" : "Add"} A Project`}
			</h1>
			<Button onClick={() => deleteProject(_id)} color='red'>
				Delete
			</Button>

			<form
				onSubmit={onSubmit}
				className='form-container'
				style={{
					borderRadius: "1rem",
					textAlign: "left",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-around",
						alignContent: "center",
					}}
					className='form'
				>
					<div
						className='contact-info'
						style={{
							width: "40%",
						}}
					>
						<label>
							Title
							<InputBar
								placeholder='Super Awesome Title Here'
								type='text'
								name='title'
								required={true}
								onChange={(e) => onChange(e)}
								value={formData.title}
							/>
						</label>
						<label>
							Description
							<textarea
								name='description'
								value={formData.description}
								style={{
									borderRadius: "0.5rem",
									resize: "none",
									width: "100%",
									height: "100%",
									fontSize: "2.5rem",
									fontFamily: "Ubuntu",
									padding: "2rem",
									color: DARK_BLUE,
								}}
								onChange={(e) => onChange(e)}
								placeholder='Type something...'
							></textarea>
						</label>
						<label>
							Image Url
							<InputBar
								placeholder='image url'
								type='text'
								name='image'
								required={true}
								onChange={(e) => onChange(e)}
								value={formData.image}
							/>
						</label>
						<label>
							Github
							<InputBar
								placeholder='link to project on github'
								type='text'
								onChange={(e) => onChange(e)}
								name='github'
								value={formData.github}
							/>
						</label>
						<label>
							Link
							<InputBar
								placeholder='link to project'
								type='text'
								name='link'
								onChange={(e) => onChange(e)}
								value={formData.link}
							/>
						</label>
						<label>
							Case Study
							<InputBar
								placeholder='link to case study'
								type='text'
								name='casestudy'
								required={true}
								onChange={(e) => onChange(e)}
								value={formData.casestudy}
							/>
						</label>
						<label>
							Tags
							<InputBar
								placeholder='seperate by commas'
								type='text'
								name='tags'
								required={true}
								onChange={(e) => onChange(e)}
								value={formData.tags}
							/>
						</label>
						<label>
							Date
							<InputBar
								type='date'
								name='date'
								required={true}
								onChange={(e) => onChange(e)}
								value={formData.date}
							/>
						</label>
					</div>
				</div>
				<Button
					style={{
						display: "block",
						margin: "5rem auto",
						marginBottom: 0,
					}}
					color={BRAND_BLUE}
				>
					{`${selectedProject ? "Edit" : "Add"} Project`}
				</Button>
			</form>
		</section>
	);
};

const mapStateToProps = ({ selectedProject }) => ({ selectedProject });

export default connect(mapStateToProps, {
	deleteProject,
	updateProject,
})(DashboardEdit);
