import {
    TOGGLE_BOTTOM_PANEL,
    TOGGLE_SIDE_PANEL,
    UPDATE_SEARCH_RESULTS,
    SHOW_IN_SLIDE_PANEL,
    SET_USER,
} from "../constants/action-types";


const initialState = {
    isBottomPanelOpen: false,
    isSidePanelOpen: false,
    searchResults: {},
    slidePanelContent: 'profile',
    user: {}
};

function rootReducer(state = initialState, action) {
    if (action.type === TOGGLE_BOTTOM_PANEL) {
        return Object.assign({}, state, {
            isBottomPanelOpen: action.payload.isBottomPanelOpen
        });
    }

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
    return state;

};

export default rootReducer;