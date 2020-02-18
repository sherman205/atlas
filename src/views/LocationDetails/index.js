import { connect } from "react-redux";
import LocationDetails from './LocationDetails';

const mapStateToProps = state => {
    return {
        searchResults: state.searchResults,
    };
};

export default connect(mapStateToProps, {})(LocationDetails);