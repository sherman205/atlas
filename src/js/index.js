import store from "../js/store/index";
import {
    toggleBottomPanel,
    toggleSidePanel,
    updateSearchResults
} from "../js/actions/index";

window.store = store;
window.toggleBottomPanel = toggleBottomPanel;
window.toggleSidePanel = toggleSidePanel;
window.updateSearchResults = updateSearchResults;