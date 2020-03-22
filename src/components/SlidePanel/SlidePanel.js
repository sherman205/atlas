import React, { Component } from 'react';
import { motion } from "framer-motion";
import { ReactComponent as Menu } from '../../assets/svg/menu.svg';
import { ReactComponent as Cross } from '../../assets/svg/cross.svg';
import Profile from '../../views/profile';
import LocationDetails from '../../views/LocationDetails';

import './SlidePanel.scss';
import BreadCrumbs from './BreadCrumbs';

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
        const { isBottomPanelOpen, isSidePanelOpen, searchResults, slidePanelContent } = this.props;

        return (
            <div>
                {!isSidePanelOpen &&
                    <Menu
                        className="icon"
                        onClick={this.togglePanel}
                    />
                }
                <motion.div
                    className="slide-panel shadow"
                    animate={isSidePanelOpen ? "open" : "closed"}
                    transition={{ duration: .5 }}
                    variants={panel}
                >
                    <div className="panel-container p-lg">
                        <div className="flex space-between">
                            <Cross
                                onClick={this.togglePanel}
                            />
                            <BreadCrumbs />
                        </div>
                        {slidePanelContent === 'profile' &&
                            <Profile />
                        }
                        {(slidePanelContent === 'location_details' && searchResults) &&
                            <LocationDetails search={searchResults} />
                        }
                    </div>
                </motion.div>
            </div>
        )
    }
}

export default SlidePanel;
