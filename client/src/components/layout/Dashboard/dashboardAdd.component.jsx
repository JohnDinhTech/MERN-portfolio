import React, { useState } from "react";
import { WHITE, DARK_BLUE, BRAND_BLUE } from "../../../constants/colors";
import InputBar from "../../utils/InputBar/inputBar.component";
import Button from "../../utils/Button/button.component";
import { connect } from "react-redux";
import { uploadProject } from "../../../actions";

const DashboardAdd = ({ uploadProject }) => {
	const [formData, setFormData] = useState();

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		uploadProject(formData);
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
				Add A Project
			</h1>

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
							/>
						</label>
						<label>
							Description
							<textarea
								name='description'
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
							/>
						</label>
						<label>
							Github
							<InputBar
								placeholder='link to project on github'
								type='text'
								onChange={(e) => onChange(e)}
								name='github'
							/>
						</label>
						<label>
							Link
							<InputBar
								placeholder='link to project'
								type='text'
								name='link'
								onChange={(e) => onChange(e)}
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
							/>
						</label>
						<label>
							Date
							<InputBar
								type='date'
								name='date'
								required={true}
								onChange={(e) => onChange(e)}
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
					Add Project
				</Button>
			</form>
		</section>
	);
};

export default connect(null, {
	uploadProject,
})(DashboardAdd);
