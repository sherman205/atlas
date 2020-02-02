import React, { Component } from 'react';
import { motion } from "framer-motion";
import { Divider } from 'semantic-ui-react';
import { ReactComponent as Cross } from '../../assets/svg/cross.svg';
import LocationDetails from '../../views/LocationDetails';

import './BottomPanel.scss';

const panel = {
    open: { bottom: 0 },
    closed: { bottom: -400 },
};

class BottomPanel extends Component {
    constructor(props) {
        super(props);
    }

    togglePanel = () => {
        const isBottomPanelOpen = !this.props.isBottomPanelOpen;
        this.props.toggleBottomPanel({ isBottomPanelOpen });
    }
    render() {
        const { isBottomPanelOpen } = this.props;

        return (
            <div>
                <motion.div
                    className="bottom-panel shadow"
                    animate={isBottomPanelOpen ? "open" : "closed"}
                    transition={{ duration: .5 }}
                    variants={panel}
                >
                    <div className="bottom-panel-container p-lg">
                        <Cross
                            style={{ float: 'right' }}
                            onClick={this.togglePanel}
                        />
                        <LocationDetails />
                    </div>
                </motion.div>
            </div>
        )
    }
}

export default BottomPanel;
