import { connect } from "react-redux";
import {
    removePin,
    savePin,
    showInSlidePanel,
    toggleSidePanel
} from '../../../js/actions/';

import BreadCrumbs from './BreadCrumbs';

const mapStateToProps = state => {
    return {
        searchResults: state.searchResults,
        slidePanelContent: state.slidePanelContent,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        showInSlidePanel: slidePanelContent => dispatch(showInSlidePanel(slidePanelContent)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreadCrumbs);