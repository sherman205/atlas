import {
    TOGGLE_SIDE_PANEL,
    UPDATE_SEARCH_RESULTS,
    SHOW_IN_SLIDE_PANEL,
    SET_USER,
    UPDATE_SAVED_PINS,
    IS_USER_SIGNED_IN,
} from "../constants/action-types";


const initialState = {
    isSidePanelOpen: false,
    isUserSignedIn: false,
    searchResults: {},
    slidePanelContent: 'profile',
    user: {},
    savedPins: [],
};

function rootReducer(state = initialState, action) {

    if (action.type === TOGGLE_SIDE_PANEL) {
        return Object.assign({}, state, {
            isSidePanelOpen: action.payload.isSidePanelOpen
        });
    }

    if (action.type === UPDATE_SEARCH_RESULTS) {
        return Object.assign({}, state, {
            searchResults: action.payload.searchResults
        });
    }

    if (action.type === SHOW_IN_SLIDE_PANEL) {
        return Object.assign({}, state, {
            slidePanelContent: action.payload.slidePanelContent
        });
    }

    if (action.type === SET_USER) {
        return Object.assign({}, state, {
            user: action.payload.user
        });
    }

    if (action.type === IS_USER_SIGNED_IN) {
        console.log("in reducer");
        console.log(action);
        return Object.assign({}, state, {
            isUserSignedIn: action.payload.isUserSignedIn
        });
    }

    if (action.type === UPDATE_SAVED_PINS) {
        return Object.assign({}, state, {
            savedPins: action.payload
        });
    }
    return state;

};

export default rootReducer;