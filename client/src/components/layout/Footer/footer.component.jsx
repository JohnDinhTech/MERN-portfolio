import React from "react";
import { DARK_BLUE, WHITE, BRAND_BLUE } from "../../../constants/colors";
import logo from "../../../images/signiture.png";
import { connect } from "react-redux";

import "./footer.styles.css";

const Footer = ({
	smallMobile,
	mobile,
	smallTablet,
	tablet,
	desktop,
	infinity,
}) => {
	return (
		<footer
			style={{
				backgroundColor: DARK_BLUE,
				color: WHITE,
				padding: "5.1rem 7%",
				position: "relative",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: smallTablet ? "center" : null,
			}}
			className='footer'
		>
			{!smallTablet && (
				<div
					className='copyright'
					style={{
						position: "absolute",
						left: "50%",
						top: "50%",
						transform: "translate(-50%, -50%)",
					}}
				>
					<img src={logo} alt="John Dinh's signiture" />
					<p
						style={{
							color: BRAND_BLUE,
							fontSize: "1.6rem",
							margin: 0,
						}}
					>
						John Dinh &copy; 2020
					</p>
				</div>
			)}
			{smallTablet && (
				<div className='copyright' style={{}}>
					<img src={logo} alt="John Dinh's signiture" />
					<p
						style={{
							color: BRAND_BLUE,
							fontSize: "1.6rem",
							margin: 0,
						}}
					>
						John Dinh &copy; 2020
					</p>
				</div>
			)}
			<ul>
				<li>john@johndinh.tech</li>
				<li>
					<a
						rel='noopener noreferrer'
						target='_blank'
						href='https://github.com/JohnDinhTech'
					>
						Github
					</a>
				</li>
				<li>
					<a
						rel='noopener noreferrer'
						target='_blank'
						href='https://twitter.com/johndinhtech'
					>
						Twitter
					</a>
				</li>
				<li>
					<a
						rel='noopener noreferrer'
						target='_blank'
						href='https://www.instagram.com/johndinhtech/'
					>
						Instagram
					</a>
				</li>
			</ul>
		</footer>
	);
};

const mapStateToProps = ({ browser }) => ({ ...browser.lessThan });

export default connect(mapStateToProps)(Footer);
