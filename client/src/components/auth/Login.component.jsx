import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Button from "../utils/Button/button.component";
import InputBar from "../utils/InputBar/inputBar.component";
import { BRAND_BLUE, WHITE, DARK_BLUE } from "../../constants/colors";
import { Redirect } from "react-router-dom";
import { login, changeNavColor } from "../../actions";
import { CHANGE_NAV_POSITION } from "../../actions/types";
const Login = ({
	mobile,
	desktop,
	login,
	isAuthenticated,
	changeNavColor,
	token,
}) => {
	useEffect(() => {
		changeNavColor(BRAND_BLUE);
	}, []);
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
		login(email, password);
	};

	if (isAuthenticated) {
		// changeNavColor(DARK_BLUE);
		changeNavColor(CHANGE_NAV_POSITION, { position: "relative" });
		localStorage.setItem("token", token);
		return <Redirect to='/dashboard' />;
	}

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

const mapStateToProps = ({ browser, auth }) => ({
	...browser.lessThan,
	...auth,
});

export default connect(mapStateToProps, {
	login,
	changeNavColor,
})(Login);
