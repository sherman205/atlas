// import {
//     TOGGLE_BOTTOM_PANEL,
//     TOGGLE_SIDE_PANEL,
//     UPDATE_SEARCH_RESULTS,
//     SHOW_IN_SLIDE_PANEL,
//     SET_USER,
//     UPDATE_SAVED_PINS,
// } from "../constants/action-types";
import { ActionTypes } from "../constants/action-types";


const initialState = {
    isBottomPanelOpen: false,
    isSidePanelOpen: false,
    searchResults: {},
    slidePanelContent: 'profile',
    user: {},
    savedPins: [],
};

function rootReducer(state = initialState, action) {
    if (action.type === ActionTypes.TOGGLE_BOTTOM_PANEL) {
        return Object.assign({}, state, {
            isBottomPanelOpen: action.payload.isBottomPanelOpen
        });
    }

    if (action.type === ActionTypes.TOGGLE_SIDE_PANEL) {
        return Object.assign({}, state, {
            isSidePanelOpen: action.payload.isSidePanelOpen
        });
    }

    if (action.type === ActionTypes.UPDATE_SEARCH_RESULTS) {
        return Object.assign({}, state, {
            searchResults: action.payload.searchResults
        });
    }

    if (action.type === ActionTypes.SHOW_IN_SLIDE_PANEL) {
        return Object.assign({}, state, {
            slidePanelContent: action.payload.slidePanelContent
        });
    }

    if (action.type === ActionTypes.SET_USER) {
        return Object.assign({}, state, {
            user: action.payload.user
        });
    }

    if (action.type === ActionTypes.UPDATE_SAVED_PINS) {
        return Object.assign({}, state, {
            savedPins: action.payload
        });
    }
    return state;

};

export default rootReducer;