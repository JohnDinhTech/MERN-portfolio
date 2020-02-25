import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../utils/Button/button.component";
import InputBar from "../utils/InputBar/inputBar.component";
import { BRAND_BLUE, WHITE, DARK_BLUE } from "../../constants/colors";
// import { Redirect } from "react-router-dom"
import axios from "axios";
const Login = ({ mobile, desktop }) => {
	const [formData, setaFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (e) => {
		setaFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		localStorage.setItem("token", null);

		try {
			const res = await axios.post("api/auth", {
				email,
				password,
			});
			const token = res.data.token;

			if (token) {
				console.log("login success");
				localStorage.setItem("token", token);
				axios.get("/dashboard");
			}
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<div
			style={{
				backgroundColor: DARK_BLUE,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "74.6vh",
			}}
		>
			<h1
				style={{
					fontSize: mobile ? "4.6rem" : "5.7rem",
					color: WHITE,
				}}
			>
				Dev Login
			</h1>

			<form
				onSubmit={handleLogin}
				className='contact-info'
				style={{
					width: desktop ? "30%" : "25%",
				}}
			>
				<label>
					Email:
					<InputBar
						placeholder='johndoe@gmail.com'
						type='email'
						name='email'
						required={true}
						onChange={onChange}
					/>
				</label>
				<label>
					Password
					<InputBar
						type='password'
						name='password'
						required={true}
						placeholder='Password'
						onChange={onChange}
					/>
				</label>
				<Button
					color={BRAND_BLUE}
					text='SIGN IN'
					style={{
						width: "50%",
						margin: "5rem auto",
						display: "block",
					}}
				/>
			</form>
		</div>
	);
};

const mapStateToProps = ({ browser }) => ({ ...browser.lessThan });

export default connect(mapStateToProps)(Login);
