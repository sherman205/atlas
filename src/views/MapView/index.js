import React from "react";
import { connect } from "react-redux";
import {
    toggleBottomPanel,
    updateSearchResults
} from '../../js/actions/index';
import MapView from './MapView';

const mapStateToProps = state => {
    return {
        searchResults: state.searchResults
    };
};

function mapDispatchToProps(dispatch) {
    return {
        toggleBottomPanel: isBottomPanelOpen => dispatch(toggleBottomPanel(isBottomPanelOpen)),
        updateSearchResults: searchResults => dispatch(updateSearchResults(searchResults)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MapView);