import { FETCH_PROJECTS } from "../actions/types";

export default (state = [], action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_PROJECTS:
			return [...payload];
		default:
			return state;
	}
};
