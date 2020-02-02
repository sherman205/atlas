import {
    TOGGLE_BOTTOM_PANEL,
    TOGGLE_SIDE_PANEL,
    UPDATE_SEARCH_RESULTS
} from "../constants/action-types";


const initialState = {
    isBottomPanelOpen: false,
    isSidePanelOpen: false,
    searchResults: {}
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

    return state;

};

export default rootReducer;