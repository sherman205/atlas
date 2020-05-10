import React from "react";
import { connect } from "react-redux";
import { signInUser } from '../../js/actions/index';
import LoginPage from './LoginPage';

const mapStateToProps = state => {
    return {
        searchResults: state.searchResults,
        savedPins: state.savedPins,
        user: state.user,
        isUserSignedIn: state.isUserSignedIn,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        signInUser: isUserSignedIn => dispatch(signInUser(isUserSignedIn)),

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);