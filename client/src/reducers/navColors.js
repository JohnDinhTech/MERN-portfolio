import { DARK_BLUE, BRAND_BLUE, WHITE } from "../constants/colors";
import { CHANGE_NAV_POSITION } from "../actions/types";

const initialState = {
	footerColor: DARK_BLUE,
	footerTextColor: BRAND_BLUE,
	navPosition: "fixed",
	navColor: "transparent",
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case DARK_BLUE:
			return initialState;

		case BRAND_BLUE:
			return {
				footerColor: BRAND_BLUE,
				footerTextColor: WHITE,
				navPosition: "relative",
				navColor: BRAND_BLUE,
			};
		case CHANGE_NAV_POSITION:
			return {
				...state,
				...payload,
			};
		default:
			return state;
	}
};
