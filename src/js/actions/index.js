import {
    TOGGLE_SIDE_PANEL,
    UPDATE_SEARCH_RESULTS,
    SHOW_IN_SLIDE_PANEL,
    SET_USER,
    UPDATE_SAVED_PINS,
    IS_USER_SIGNED_IN,
} from "../constants/action-types";
import { getQueriesForElement } from "@testing-library/react";



export function toggleSidePanel(payload) {
    return { type: TOGGLE_SIDE_PANEL, payload }
};

export function updateSearchResults(payload) {
    return { type: UPDATE_SEARCH_RESULTS, payload }
};

export function showInSlidePanel(payload) {
    return { type: SHOW_IN_SLIDE_PANEL, payload }
};

export function setUser(payload) {
    return { type: SET_USER, payload }
};

export function updateSavedPins(payload) {
    return { type: UPDATE_SAVED_PINS, payload }
}

export function signInUser(payload) {
    console.log(payload);
    return { type: IS_USER_SIGNED_IN, payload }
}


export function getUser(id) {
    return dispatch => {
        return fetch('http://127.0.0.1:8000/api/v1/profiles/1/', {
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
        return fetch('http://127.0.0.1:8000/api/v1/pins/1/', {
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
        return fetch('http://127.0.0.1:8000/api/v1/pins/add/', {
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
        return fetch(`http://127.0.0.1:8000/api/v1/pins/delete/${id}/`, {
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