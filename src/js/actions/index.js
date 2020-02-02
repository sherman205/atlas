import {
    TOGGLE_BOTTOM_PANEL,
    TOGGLE_SIDE_PANEL,
    UPDATE_SEARCH_RESULTS
} from "../constants/action-types";


export function toggleBottomPanel(payload) {
    return { type: TOGGLE_BOTTOM_PANEL, payload }
};

export function toggleSidePanel(payload) {
    return { type: TOGGLE_SIDE_PANEL, payload }
};

export function updateSearchResults(payload) {
    return { type: UPDATE_SEARCH_RESULTS, payload }
};