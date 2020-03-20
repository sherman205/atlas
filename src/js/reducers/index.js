import { AuthTypes, ActionTypes } from "../constants/action-types";


const initialState = {
    isBottomPanelOpen: false,
    isSidePanelOpen: false,
    searchResults: {},
    slidePanelContent: 'profile',
    user: {},
    savedPins: [],
    isAuthenticated: false
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
    if (action.type === AuthTypes.LOGIN) {
        return Object.assign({}, state, {
            isAuthenticated: action.payload
        });
    }
    return state;

};

export default rootReducer;