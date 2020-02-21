import { ANIMATE_CLIP_PATH } from "../actions/types";

const initialState = "polygon(0 0, 107% 0, 100% 100%, 0 100%";
const endState = "clip-path: polygon(0 0, 57% 0, 50% 100%, 0 100%)";

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ANIMATE_CLIP_PATH:
			return payload;
		default:
			return endState;
	}
};
