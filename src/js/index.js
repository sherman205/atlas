import store from "../js/store/index";
import {
    toggleBottomPanel,
    toggleSidePanel,
    updateSearchResults,
    showInSlidePanel,
    setUser,
    updateSavedPins,
    authLogin
} from "../js/actions/index";

window.store = store;
window.toggleBottomPanel = toggleBottomPanel;
window.toggleSidePanel = toggleSidePanel;
window.updateSearchResults = updateSearchResults;
window.showInSlidePanel = showInSlidePanel;
window.showInSlidePanel = showInSlidePanel;
window.setUser = setUser;
window.updateSavedPins = updateSavedPins;
window.authLogin = authLogin;