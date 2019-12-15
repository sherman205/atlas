import React, { Component } from 'react';
import { motion } from "framer-motion";
import { ReactComponent as Menu } from '../../assets/svg/menu.svg';
import { ReactComponent as Cross } from '../../assets/svg/cross.svg';
import Profile from '../../views/profile/Profile';

import './SlidePanel.scss';

const panel = {
    open: { right: 0 },
    closed: { right: -600 },
};

class SlidePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    togglePanel = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <div>
                <Menu
                    className="icon"
                    onClick={this.togglePanel}
                />
                <motion.div
                    className="slide-panel shadow"
                    animate={this.state.isOpen ? "open" : "closed"}
                    transition={{ duration: .5 }}
                    variants={panel}
                >
                    <div className="panel-container p-lg">
                        <Cross
                            onClick={this.togglePanel}
                        />
                        <Profile />
                    </div>
                </motion.div>
            </div>
        )
    }
}

export default SlidePanel;
