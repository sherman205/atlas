import React from "react";
import { connect } from "react-redux";
import { toggleBottomPanel } from '../../js/actions/index';
import BottomPanel from './BottomPanel';

const mapStateToProps = state => {
    return {
        isBottomPanelOpen: state.isBottomPanelOpen,
        isSidePanelOpen: state.isSidePanelOpen
    };
};

function mapDispatchToProps(dispatch) {
    return {
        toggleBottomPanel: isBottomPanelOpen => dispatch(toggleBottomPanel(isBottomPanelOpen))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomPanel);