import {
	INIT_MESSAGE_MODAL,
	STOP_MESSAGE_MODAL,
	CLOSE_MESSAGE_MODAL,
} from "../actions/types";
const initialState = {
	loading: true,
	opacity: 0,
	zIndex: -9,
	text: "",
};

export default (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case INIT_MESSAGE_MODAL:
			return { ...state, opacity: 1, zIndex: 9 };
		case STOP_MESSAGE_MODAL:
			return {
				...state,
				loading: false,
				text: payload,
			};
		case CLOSE_MESSAGE_MODAL:
			return initialState;
		default:
			return state;
	}
};
