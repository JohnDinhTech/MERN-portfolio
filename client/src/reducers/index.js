import { combineReducers } from "redux";
import { createResponsiveStateReducer } from "redux-responsive";
import mobileMenu from "./mobileMenu";
export default combineReducers({
	mobileMenu,
	browser: createResponsiveStateReducer({
		mobile: 875,
		tablet: 1180,
	}),
});
