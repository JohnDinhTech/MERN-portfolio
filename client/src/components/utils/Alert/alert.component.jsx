import React from "react";
import { connect } from "react-redux";
import "./alert.styles.css";
const Alert = ({ alerts }) => (
	<div
		style={{
			position: "absolute",
			top: 0,
		}}
	>
		{alerts !== null &&
			alerts.length > 0 &&
			alerts.map((alert) => (
				<div key={alert.id} className={`alert alert-${alert.type}`}>
					{alert.msg}
				</div>
			))}
	</div>
);

const mapStateToProps = (state) => ({ alerts: state.alerts });

export default connect(mapStateToProps)(Alert);
