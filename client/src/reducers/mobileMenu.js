import { TOGGLE_MOBILE_MENU } from "../actions/types";

export default (state = null, action) => {
	const { type } = action;
	switch (type) {
		case TOGGLE_MOBILE_MENU:
			return !state;
		default:
			return false;
	}
};
