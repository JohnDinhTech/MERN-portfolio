import { UPLOAD_SUCCESS, FETCH_PROJECTS } from "../actions/types";

export default (state = [], action) => {
	const { type, payload } = action;
	switch (type) {
		case UPLOAD_SUCCESS:
		case FETCH_PROJECTS:
			return [...state, ...payload];
		default:
			return state;
	}
};
