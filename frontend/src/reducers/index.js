import { combineReducers } from "redux";
import { createResponsiveStateReducer } from "redux-responsive";
import mobileMenu from "./mobileMenu";
import heroImageLoaded from "./heroImageLoaded";
import scrollY from "./scrollY";
import auth from "./auth";
import navColors from "./navColors";
import projects from "./projects";
import selectedProject from "./selectedProject";
import alerts from "./alerts";
import messageModal from "./messageModal";
export default combineReducers({
	mobileMenu,
	heroImageLoaded,
	scrollY,
	auth,
	navColors,
	projects,
	selectedProject,
	alerts,
	messageModal,
	browser: createResponsiveStateReducer({
		smallMobile: 482,
		mobile: 732,
		smallTablet: 964,
		tablet: 1180,
		desktop: 1659,
	}),
});
