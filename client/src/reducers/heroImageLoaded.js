import { LOAD_IMAGE, LOADING_IMAGE } from "../actions/types";
export default (state = false, action) => {
	const { type } = action;
	switch (type) {
		case LOAD_IMAGE:
			return true;
		case LOADING_IMAGE:
			return "loading";
		default:
			return state;
	}
};
