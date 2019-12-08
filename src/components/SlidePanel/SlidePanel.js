import React, { Component } from 'react';
import { motion } from "framer-motion";
import { ReactComponent as Menu } from '../../assets/svg/menu.svg';

import './SlidePanel.scss';

const panel = {
    open: { width: 700 },
    closed: { width: 0 },
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
                    variants={panel}

                >
                    <Menu
                        onClick={this.togglePanel}
                    />
                </motion.div>
            </div>
        )
    }
}

export default SlidePanel;
