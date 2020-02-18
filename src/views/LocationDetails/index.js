import { connect } from "react-redux";
import LocationDetails from './LocationDetails';

import {
    removePin,
    savePin,
} from '../../js/actions/index';

const mapStateToProps = state => {
    return {
        savedPins: state.savedPins,
        searchResults: state.searchResults,
        user: state.user
    };
};

export default connect(mapStateToProps, {
    removePin,
    savePin,
})(LocationDetails);