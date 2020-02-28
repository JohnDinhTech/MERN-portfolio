import React, { useEffect } from "react";
import { WHITE } from "../../../constants/colors";
import logo from "../../../images/signiture.png";
import { connect } from "react-redux";
import { changeNavColor } from "../../../actions";

import "./footer.styles.css";

const Footer = ({ smallTablet, style, navColors, changeNavColor }) => {
	useEffect(() => {
		changeNavColor(navColors.footerColor);
	}, []);
	const { footerColor, footerTextColor } = navColors;
	return (
		<footer
			style={{
				backgroundColor: footerColor,
				color: WHITE,
				padding: "5.1rem 7%",
				position: "relative",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: smallTablet ? "center" : null,
				...style,
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
							color: footerTextColor,
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
							color: footerTextColor,
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
						href='https://www.linkedin.com/in/johndinhtech/'
					>
						LinkedIn
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
			</ul>
		</footer>
	);
};

const mapStateToProps = ({ browser, navColors }) => ({
	...browser.lessThan,
	navColors,
});

export default connect(mapStateToProps, {
	changeNavColor,
})(Footer);
