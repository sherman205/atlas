import React, { Component } from 'react';
import { motion } from "framer-motion";

import './LoginPage.scss';

const gradient = {
    on: { opacity: 1 },
    off: { opacity: 0 },
};

const overlay = {
    on: { filter: 'blur(4px)' },
    off: { filter: 'blur(0px)' },
};

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    toggleOverlay = () => {
        this.props.signInUser({ isUserSignedIn: true });
    }


    render() {
        const { isUserSignedIn } = this.props;

        return (
            <motion.div
                className={`login-page-container`}
                animate={isUserSignedIn ? "off" : "on"}
                transition={{ duration: .5 }}
                variants={overlay}
            >
                <motion.div
                    className={`gradient ${isUserSignedIn ? 'no-show' : ''}`}
                    animate={isUserSignedIn ? "off" : "on"}
                    transition={{ duration: .5 }}
                    variants={gradient}
                    onClick={this.toggleOverlay}
                />
                {this.props.children}
            </motion.div>
        )
    }
}

export default LoginPage;