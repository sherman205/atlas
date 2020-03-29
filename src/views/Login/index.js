import Login from './Login';
import { connect } from "react-redux";

import {
    userLogin,
    userRegister
} from '../../js/actions/index';

export default connect(null, {
    userLogin,
    userRegister
})(Login);