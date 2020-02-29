import React from "react";
import "./checkmark.styles.css";
import { WHITE } from "../../../constants/colors";
import { connect } from "react-redux";
const Checkmark = ({ opacity, loading, zIndex, text }) => {
	return (
		<div
			className='checkmark-container'
			style={{
				opacity,
				zIndex,
				position: "absolute",
				left: "50%",
				top: "50%",
				backgroundColor: WHITE,
				height: "20%",
				width: "30%",
				transform: "translate(-50%, -50%)",
				borderRadius: "0.5rem",
				transition: "all 2s ease",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<div className={`circle-loader ${!loading ? "load-complete" : ""}`}>
				<div
					className='checkmark draw'
					style={{
						display: loading ? "none" : "block",
					}}
				></div>
			</div>
			<p
				style={{
					marginTop: "-3rem",
					fontSize: "1.6rem",
					opacity,
				}}
			>
				{text}
			</p>
		</div>
	);
};

const mapStateToProps = ({ messageModal }) => ({ ...messageModal });

export default connect(mapStateToProps)(Checkmark);
