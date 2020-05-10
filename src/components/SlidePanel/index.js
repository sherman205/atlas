import { connect } from "react-redux";
import { toggleSidePanel } from '../../js/actions/index';
import SlidePanel from './SlidePanel';

const mapStateToProps = state => {
    return {
        isSidePanelOpen: state.isSidePanelOpen,
        searchResults: state.searchResults,
        slidePanelContent: state.slidePanelContent,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        toggleSidePanel: isSidePanelOpen => dispatch(toggleSidePanel(isSidePanelOpen))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SlidePanel);