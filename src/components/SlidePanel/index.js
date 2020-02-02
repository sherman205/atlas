import React from "react";
import { connect } from "react-redux";
import { toggleSidePanel } from '../../js/actions/index';
import SlidePanel from './SlidePanel';

const mapStateToProps = state => {
    return {
        isBottomPanelOpen: state.isBottomPanelOpen,
        isSidePanelOpen: state.isSidePanelOpen
    };
};

function mapDispatchToProps(dispatch) {
    return {
        toggleSidePanel: isSidePanelOpen => dispatch(toggleSidePanel(isSidePanelOpen))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SlidePanel);