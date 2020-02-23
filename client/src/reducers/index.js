import { combineReducers } from "redux";
import { createResponsiveStateReducer } from "redux-responsive";
import mobileMenu from "./mobileMenu";
export default combineReducers({
	mobileMenu,
	browser: createResponsiveStateReducer({
		mobile: 732,
		smallTablet: 964,
		tablet: 1180,
		desktop: 1659,
	}),
});
