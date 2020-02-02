import React, { Component } from 'react';
import { motion } from "framer-motion";
import { Divider } from 'semantic-ui-react';
import { ReactComponent as Cross } from '../../assets/svg/cross.svg';
import LocationDetails from '../../views/LocationDetails/LocationDetails';

import './BottomPanel.scss';

const panel = {
    open: { bottom: 0 },
    closed: { bottom: -400 },
};

class BottomPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
    }

    togglePanel = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        return (
            <div>
                <motion.div
                    className="bottom-panel shadow"
                    animate={this.state.isOpen ? "open" : "closed"}
                    transition={{ duration: .5 }}
                    variants={panel}
                >
                    <div className="bottom-panel-container p-lg">
                        {/* <Cross
                            onClick={this.togglePanel}
                        /> */}
                        <LocationDetails />
                    </div>
                </motion.div>
            </div>
        )
    }
}

export default BottomPanel;
