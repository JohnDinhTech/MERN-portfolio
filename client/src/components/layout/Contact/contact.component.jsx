import React from "react";
import InputBar from "../../utils/InputBar/inputBar.component";
import {
	DARK_BLUE,
	WHITE,
	LIGHT_GREEN,
	BRAND_BLUE,
} from "../../../constants/colors";
import "./contact.styles.css";
import Button from "../../utils/Button/button.component";
import { connect } from "react-redux";

const Contact = ({
	smallMobile,
	mobile,
	smallTablet,
	tablet,
	desktop,
	infinity,
}) => {
	return (
		<section
			className='contact'
			style={{
				padding: smallTablet ? "0 5%" : "0 14% 15rem 14%",
				backgroundColor: smallTablet ? BRAND_BLUE : WHITE,
				height: smallTablet ? "100rem" : "auto",
			}}
		>
			<h1
				style={{
					color: smallTablet ? WHITE : DARK_BLUE,
					textAlign: "center",
					fontSize: smallTablet ? "3rem" : "5.7rem",
					margin: 0,
					padding: "5.3rem 0",
				}}
			>
				LET'S GET IN TOUCH
			</h1>
			<form
				className='form-container'
				style={{
					backgroundColor: smallTablet ? BRAND_BLUE : DARK_BLUE,
					borderRadius: "1rem",
					padding: smallTablet ? "1rem 0" : "13.3rem 12.2rem",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: desktop ? "column" : "row",
						justifyContent: "space-around",
						alignContent: "center",
					}}
					className='form'
				>
					<div
						className='contact-info'
						style={{
							width: desktop ? "100%" : "40%",
						}}
					>
						<label>
							Full Name:
							<InputBar
								placeholder='John Doe'
								type='text'
								name='name'
								required={true}
							/>
						</label>
						<label>
							Email:
							<InputBar
								placeholder='johndoe@gmail.com'
								type='email'
								name='email'
								required={true}
							/>
						</label>
						<label
							style={{
								marginBottom: desktop ? "5rem" : 0,
							}}
						>
							Phone Number:
							<InputBar
								placeholder='(555)-555-5555'
								type='tel'
								name='phone'
								required={true}
							/>
						</label>
						{!desktop && (
							<div
								className='resume'
								style={{
									color: WHITE,
									textAlign: "center",
									marginTop: "8rem",
									transform: "translateX(-3rem)",
								}}
							>
								<p style={{ margin: "0" }}>
									Looking to
									<Button
										style={{
											margin: "0 1rem",
											paddingLeft: "4rem",
											paddingRight: "4rem",
										}}
										color={BRAND_BLUE}
										text='HIRE ME'
									/>
									?
								</p>
							</div>
						)}
					</div>
					<div
						className='contact-message'
						style={{
							position: "relative",
							height: "32.3rem",
							width: desktop ? "100%" : "40%",
							transform: "translateY(2.2rem)",
						}}
					>
						{!desktop && (
							<h1
								style={{
									position: "absolute",
									left: "50%",
									top: "-13rem",
									transform: "translateX(-50%)",
									fontSize: "4.6rem",
									color: WHITE,
								}}
							>
								Message
							</h1>
						)}

						<textarea
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
							placeholder='Type something...'
						></textarea>
						<Button
							color={LIGHT_GREEN}
							text='SEND MESSAGE'
							style={{
								margin: "0 auto",
								marginTop: desktop ? "3rem" : "7.4rem",
								width: "60%",
								display: "block",
							}}
						/>
					</div>
				</div>
			</form>
		</section>
	);
};

const mapStateToProps = ({ browser }) => ({ ...browser.lessThan });

export default connect(mapStateToProps)(Contact);
