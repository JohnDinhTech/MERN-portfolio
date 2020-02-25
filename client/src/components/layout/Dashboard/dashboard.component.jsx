import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeNavColor } from "../../../actions";
import { CHANGE_NAV_POSITION } from "../../../actions/types";
import { Link } from "react-router-dom";
const Dashboard = () => {
	useEffect(() => {
		changeNavColor(CHANGE_NAV_POSITION, { position: "relative" });
	}, []);
	return (
		<div>
			<h1>Welcome to my Dashboard</h1>
			<Link to='/dashboard/add'>Add Project</Link>
		</div>
	);
};

export default connect(null, {
	changeNavColor,
})(Dashboard);
