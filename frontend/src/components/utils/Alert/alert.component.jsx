import React from "react";
import { connect } from "react-redux";
import "./alert.styles.css";
const Alert = ({ alerts }) => (
    <div
        style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 9999999
        }}
    >
        {alerts !== null &&
            alerts.length > 0 &&
            alerts.map(alert => (
                <div key={alert.id} className={`alert alert-${alert.type}`}>
                    {alert.msg}
                </div>
            ))}
    </div>
);

const mapStateToProps = state => ({ alerts: state.alerts });

export default connect(mapStateToProps)(Alert);
