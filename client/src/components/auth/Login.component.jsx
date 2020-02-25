import React from "react";
import { connect } from "react-redux";
import Button from "../utils/Button/button.component";
import InputBar from "../utils/InputBar/inputBar.component";
import { BRAND_BLUE, WHITE, DARK_BLUE } from "../../constants/colors";
const Login = ({ mobile, desktop }) => {
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

			<div
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
					/>
				</label>
				<label>
					Password
					<InputBar
						type='password'
						name='password'
						required={true}
						placeholder='Password'
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
			</div>
		</div>
	);
};

const mapStateToProps = ({ browser }) => ({ ...browser.lessThan });

export default connect(mapStateToProps)(Login);
