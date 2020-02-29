import { SET_SCROLL_Y } from "../actions/types";
export default (state = 0, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_SCROLL_Y:
			return payload;
		default:
			return state;
	}
};
