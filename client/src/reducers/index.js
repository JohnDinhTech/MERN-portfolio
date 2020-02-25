import { combineReducers } from "redux";
import { createResponsiveStateReducer } from "redux-responsive";
import mobileMenu from "./mobileMenu";
import heroImageLoaded from "./heroImageLoaded";
import scrollY from "./scrollY";
export default combineReducers({
	mobileMenu,
	heroImageLoaded,
	scrollY,
	browser: createResponsiveStateReducer({
		smallMobile: 482,
		mobile: 732,
		smallTablet: 964,
		tablet: 1180,
		desktop: 1659,
	}),
});
