import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeNavColor } from "../../../actions";
import { CHANGE_NAV_POSITION } from "../../../actions/types";
import { Link } from "react-router-dom";
import { DARK_BLUE, WHITE, BRAND_BLUE } from "../../../constants/colors";
import Button from "../../utils/Button/button.component";
const Dashboard = () => {
	useEffect(() => {
		changeNavColor(CHANGE_NAV_POSITION, { position: "relative" });
	}, []);
	return (
		<section
			style={{
				backgroundColor: DARK_BLUE,
				color: WHITE,
				marginTop: "-1.7rem",
				textAlign: "center",
				paddingTop: "3rem",
			}}
		>
			<h1
				style={{
					fontSize: "5.7rem",
				}}
			>
				Welcome Back John
			</h1>

			<Button color={BRAND_BLUE}>
				<Link
					style={{
						color: WHITE,
					}}
					to='/dashboard/add'
				>
					Add Project
				</Link>
			</Button>
		</section>
	);
};
export default connect(null, {
	changeNavColor,
})(Dashboard);
