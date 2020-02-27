import {
	TOGGLE_MOBILE_MENU,
	LOAD_IMAGE,
	LOADING_IMAGE,
	SET_SCROLL_Y,
	LOGIN_SUCCESS,
	USER_LOADED,
	CHANGE_NAV_POSITION,
	CHANGE_NAV_BACKGROUND,
	FETCH_PROJECTS,
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";

export const toggleMobileMenu = () => ({ type: TOGGLE_MOBILE_MENU });

export const setScrollY = (payload) => ({ payload, type: SET_SCROLL_Y });

export const loadImage = () => (dispatch) => {
	dispatch({ type: LOADING_IMAGE });
	setTimeout(() => {
		dispatch({ type: LOAD_IMAGE });
	}, 1000);
};

// Load User
export const loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const res = await axios.get("/api/auth");

		dispatch({
			type: USER_LOADED,
			payload: res.data,
		});
	} catch (err) {
		console.log(err.message);
	}
};

// Login User
export const login = (email, password) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	const body = JSON.stringify({ email, password });

	try {
		const res = await axios.post("/api/auth", body, config);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});

		dispatch(loadUser());
	} catch (err) {
		const errors = err.response.data.errors;
		console.log(errors);
		if (errors) {
			// errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
		}

		// dispatch({
		// 	type: LOGIN_FAIL,
		// });
	}
};

export const changeNavColor = (type, payload) => (dispatch) => {
	switch (type) {
		case CHANGE_NAV_POSITION:
			dispatch({
				type,
				payload,
			});
			break;
		case CHANGE_NAV_BACKGROUND:
			dispatch({ type, payload });
			break;
		default:
			dispatch({
				type,
			});
			break;
	}
};

export const uploadProject = (payload) => async (dispatch) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	const body = JSON.stringify(payload);

	try {
		await axios.post("/api/projects", body, config);
		dispatch(fetchProjects());
	} catch (error) {
		console.error(error.message);
	}
};

export const fetchProjects = () => async (dispatch) => {
	try {
		const allProjects = await axios.get("/api/projects");
		dispatch({ type: FETCH_PROJECTS, payload: allProjects.data });
	} catch (error) {
		console.error(error.message);
	}
};
