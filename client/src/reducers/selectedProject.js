import { SELECT_PROJECT, DESELECT_PROJECT } from "../actions/types";
export default (state = null, action) => {
	const { type, payload } = action;
	switch (type) {
		case SELECT_PROJECT:
			return payload;
		case DESELECT_PROJECT:
			return null;
		default:
			return state;
	}
};
