import React from "react";
import { connect } from "react-redux";
import {
    toggleBottomPanel,
    toggleSidePanel,
    updateSearchResults,
    showInSlidePanel
} from '../../js/actions/index';
import MapView from './MapView';

const mapStateToProps = state => {
    return {
        searchResults: state.searchResults,
        savedPins: state.savedPins,
        user: state.user,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        toggleSidePanel: isSidePanelOpen => dispatch(toggleSidePanel(isSidePanelOpen)),
        updateSearchResults: searchResults => dispatch(updateSearchResults(searchResults)),
        showInSlidePanel: slidePanelContent => dispatch(showInSlidePanel(slidePanelContent)),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapView);