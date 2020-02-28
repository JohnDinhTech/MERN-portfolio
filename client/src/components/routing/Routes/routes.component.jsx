import React from "react";
import PrivateRoute from "../PrivateRoute/privateRoute.component";
import { Switch } from "react-router-dom";
import Dashboard from "../../layout/Dashboard/dashboard.component";
import DashboardAdd from "../../layout/Dashboard/dashboardAdd.component";
import DashboardEdit from "../../layout/Dashboard/dashboardEdit.component";

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
				<PrivateRoute
					exact
					path='/dashboard/edit'
					component={DashboardEdit}
				/>
			</Switch>
		</div>
	);
};

export default Routes;
