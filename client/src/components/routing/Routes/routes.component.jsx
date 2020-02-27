import React from "react";
import PrivateRoute from "../PrivateRoute/privateRoute.component";
import { Switch } from "react-router-dom";
import Dashboard from "../../layout/Dashboard/dashboard.component";
import DashboardAdd from "../../layout/Dashboard/dashboardAdd.component";

const Routes = () => {
	return (
		<div>
			<Switch>
				<PrivateRoute exact path='/dashboard' component={Dashboard} />
				<PrivateRoute
					exact
					path='/dashboard/add'
					component={DashboardAdd}
				/>
			</Switch>
		</div>
	);
};

export default Routes;
