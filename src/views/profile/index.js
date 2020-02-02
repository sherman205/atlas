import React from "react";
import { connect } from "react-redux";
import {
    toggleSidePanel,
    updateSearchResults,
    showInSlidePanel,
    setUser
} from '../../js/actions/index';
import Profile from './Profile';

const mapStateToProps = state => {
    return {
        searchResults: state.searchResults,
        user: state.user
    };
};

function mapDispatchToProps(dispatch) {
    return {
        toggleSidePanel: isSidePanelOpen => dispatch(toggleSidePanel(isSidePanelOpen)),
        updateSearchResults: searchResults => dispatch(updateSearchResults(searchResults)),
        showInSlidePanel: slidePanelContent => dispatch(showInSlidePanel(slidePanelContent)),
        setUser: user => dispatch(setUser(user)),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);