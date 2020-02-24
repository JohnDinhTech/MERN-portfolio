import {
	TOGGLE_MOBILE_MENU,
	LOAD_IMAGE,
	LOADING_IMAGE,
	SET_SCROLL_Y,
} from "./types";

export const toggleMobileMenu = () => ({ type: TOGGLE_MOBILE_MENU });

export const setScrollY = (payload) => ({ payload, type: SET_SCROLL_Y });

export const loadImage = () => (dispatch) => {
	dispatch({ type: LOADING_IMAGE });
	setTimeout(() => {
		dispatch({ type: LOAD_IMAGE });
	}, 5000);
};
