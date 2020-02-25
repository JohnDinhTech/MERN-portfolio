import React from "react";
import PrivateRoute from "../PrivateRoute/privateRoute.component";
import { Switch } from "react-router-dom";
import Dashboard from "../../layout/Dashboard/dashboard.component";
const Routes = () => {
	return (
		<div>
			<Switch>
				<PrivateRoute exact path='/dashboard' component={Dashboard} />
			</Switch>
		</div>
	);
};

export default Routes;
