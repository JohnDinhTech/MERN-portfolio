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
    SELECT_PROJECT,
    DESELECT_PROJECT,
    SET_ALERT,
    REMOVE_ALERT,
    INIT_MESSAGE_MODAL,
    STOP_MESSAGE_MODAL,
    CLOSE_MESSAGE_MODAL
} from "./types";
import { v4 as uuid } from "uuid";

import setAuthToken from "../utils/setAuthToken";
import axios from "axios";

export const toggleMobileMenu = () => ({ type: TOGGLE_MOBILE_MENU });

export const setScrollY = payload => ({ payload, type: SET_SCROLL_Y });

export const loadImage = () => dispatch => {
    dispatch({ type: LOADING_IMAGE });
    setTimeout(() => {
        dispatch({ type: LOAD_IMAGE });
    }, 1000);
};

// Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get("http://localhost:5000/api/auth");

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        console.log(err.message);
    }
};

// Login User
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post(
            "http://localhost:5000/api/auth",
            body,
            config
        );
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;
        console.log(errors);
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }
    }
};

export const changeNavColor = (type, payload) => dispatch => {
    switch (type) {
        case CHANGE_NAV_POSITION:
            dispatch({
                type,
                payload
            });
            break;
        case CHANGE_NAV_BACKGROUND:
            dispatch({ type, payload });
            break;
        default:
            dispatch({
                type
            });
            break;
    }
};

export const uploadProject = payload => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    const body = JSON.stringify(payload);

    try {
        await axios.post("http://localhost:5000/api/projects", body, config);
        dispatch(fetchProjects());
        window.location.href = "/";
    } catch (err) {
        console.error(err.message);
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }
    }
};

export const updateProject = payload => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    const body = JSON.stringify(payload);

    try {
        await axios.put("http://localhost:5000/api/projects", body, config);
        dispatch(fetchProjects());
        window.location.href = "/";
    } catch (err) {
        console.error(err.message);
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }
    }
};

export const fetchProjects = () => async dispatch => {
    try {
        const allProjects = await axios.get(
            "http://localhost:5000/api/projects"
        );
        dispatch({ type: FETCH_PROJECTS, payload: allProjects.data });
    } catch (err) {
        console.error(err.message);
        const errors = err.response.data.errors;
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }
    }
};

export const selectProject = id => async dispatch => {
    try {
        const res = await axios.get(`/api/projects/${id}`);
        dispatch({
            type: SELECT_PROJECT,
            payload: res.data
        });
    } catch (error) {
        console.error(error.message);
    }
};

export const deselectProject = () => ({ type: DESELECT_PROJECT });

export const deleteProject = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/projects/${id}`);
        dispatch(fetchProjects());
        window.location.href = "/";
    } catch (error) {
        console.error(error.message);
    }
};

export const setAlert = (msg, type, timeout = 5000) => dispatch => {
    const id = uuid();
    dispatch({
        type: SET_ALERT,
        payload: { msg, type, id }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

export const sendMessage = formData => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    const body = JSON.stringify(formData);

    try {
        dispatch({
            type: INIT_MESSAGE_MODAL
        });
        const res = await axios.post(
            "http://localhost:5000/api/message",
            body,
            config
        );
        dispatch({
            type: STOP_MESSAGE_MODAL,
            payload: res.data.msg
        });

        setTimeout(() => {
            dispatch({
                type: CLOSE_MESSAGE_MODAL
            });
        }, 500);
    } catch (error) {
        console.error(error.message);
    }
};
