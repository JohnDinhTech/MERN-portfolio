import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loadUser } from "../../../actions";

const PrivateRoute = ({ component: Component, auth, loadUser, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				auth.isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect to='/' />
				)
			}
		/>
	);
};

const mapStateToProps = ({ auth }) => ({
	auth,
});

export default connect(mapStateToProps, {
	loadUser,
})(PrivateRoute);
