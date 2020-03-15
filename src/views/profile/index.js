import React from "react";
import { connect } from "react-redux";
import {
    getUser,
    toggleSidePanel,
    updateSearchResults,
    showInSlidePanel,
    setUser
} from '../../js/actions/index';
import Profile from './Profile';

const mapStateToProps = state => {
    return {
        savedPins: state.savedPins,
        user: state.user
    };
};

function mapDispatchToProps(dispatch) {
    return {
        toggleSidePanel: isSidePanelOpen => dispatch(toggleSidePanel(isSidePanelOpen)),
        updateSearchResults: searchResults => dispatch(updateSearchResults(searchResults)),
        showInSlidePanel: slidePanelContent => dispatch(showInSlidePanel(slidePanelContent)),
        getUser: id => dispatch(getUser(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);