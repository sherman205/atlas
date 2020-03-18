import { ActionTypes, AuthTypes } from "../constants/action-types";
import { ActionUrls, AuthUrls } from "../constants/urls";
import { getQueriesForElement } from "@testing-library/react";


export function toggleBottomPanel(payload) {
    return { type: ActionTypes.TOGGLE_BOTTOM_PANEL, payload }
};

export function toggleSidePanel(payload) {
    return { type: ActionTypes.TOGGLE_SIDE_PANEL, payload }
};

export function updateSearchResults(payload) {
    return { type: ActionTypes.UPDATE_SEARCH_RESULTS, payload }
};

export function showInSlidePanel(payload) {
    return { type: ActionTypes.SHOW_IN_SLIDE_PANEL, payload }
};

export function setUser(payload) {
    return { type: ActionTypes.SET_USER, payload }
};

export function updateSavedPins(payload) {
    return { type: ActionTypes.UPDATE_SAVED_PINS, payload }
}

export function authLogin(payload) {
    return { type: AuthTypes.LOGIN, payload }
}

export function getUser(id) {
    return dispatch => {
        return fetch(ActionUrls.GET_USER, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const user = data;
                dispatch(getPins());
                dispatch(setUser({ user }));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export function getPins() {
    return dispatch => {
        return fetch(ActionUrls.GET_PINS, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const savedPins = data;
                dispatch(updateSavedPins(savedPins));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
}

export function savePin(pin) {
    return dispatch => {
        return fetch(ActionUrls.SAVE_PIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(pin),
        })
            .then((response) => response.json())
            .then((data) => {
                const savedPins = data;
                dispatch(updateSavedPins(savedPins));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export function removePin(id) {
    return dispatch => {
        return fetch(`${ActionUrls.REMOVE_PIN}${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                const savedPins = data;
                dispatch(updateSavedPins(savedPins));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

/* Auth actions */

export function userLogin(credentials) {
    return dispatch => {
        return fetch(AuthUrls.LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
            .then((response) => response.json())
            .then((data) => {
                const token = data.key;
                dispatch(authLogin(token ? true : false));
                localStorage.setItem("token", token);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export function userLogout() {
    localStorage.removeItem("token");
    return {
        type: AuthTypes.LOGOUT
    };
}