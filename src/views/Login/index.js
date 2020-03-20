import Login from './Login';
import { connect } from "react-redux";

import {
    userLogin
} from '../../js/actions/index';

export default connect(null, { userLogin })(Login);