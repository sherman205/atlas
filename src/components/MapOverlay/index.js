import React from "react";
import { connect } from "react-redux";
import { toggleSidePanel } from '../../js/actions/index';
import MapOverlay from './MapOverlay';

const mapStateToProps = state => {
    return {
        isBottomPanelOpen: state.isBottomPanelOpen,
        isSidePanelOpen: state.isSidePanelOpen
    };
};

export default connect(mapStateToProps, null)(MapOverlay);