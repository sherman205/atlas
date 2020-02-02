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
    }

    togglePanel = () => {
        const isSidePanelOpen = !this.props.isSidePanelOpen;
        this.props.toggleSidePanel({ isSidePanelOpen });
    }
    render() {
        const { isBottomPanelOpen, isSidePanelOpen } = this.props;

        return (
            <div>
                <motion.div
                    className="slide-panel shadow"
                    animate={isSidePanelOpen ? "open" : "closed"}
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
                <Menu
                    className="icon"
                    onClick={this.togglePanel}
                />
            </div>
        )
    }
}

export default SlidePanel;
