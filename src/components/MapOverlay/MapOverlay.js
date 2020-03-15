import React, { Component } from 'react';
import MapSearch from '../MapSearch/MapSearch';
import { motion } from "framer-motion";

import { ReactComponent as CurrentLocation } from '../../assets/svg/current_location.svg';
import { ReactComponent as Plus } from '../../assets/svg/plus.svg';
import { ReactComponent as Minus } from '../../assets/svg/minus.svg';
import { ReactComponent as Menu } from '../../assets/svg/menu.svg';
import { ReactComponent as Settings } from '../../assets/svg/settings.svg';
import SlidePanel from '../SlidePanel/';
import BottomPanel from '../BottomPanel';
import Profile from '../../views/profile';

import './MapOverlay.scss';


class MapOverlay extends Component {
    constructor(props) {
        super(props);
    }

    zoomIn = () => {
        this.props.zoomCallback("in");
    }

    zoomOut = () => {
        this.props.zoomCallback("out");
    }

    currentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                this.props.geolocation(pos);
            });
        }
    }

    render() {

        return (
            <div>
                <div className="map-overlay m-lg">
                    {/* <MapSearch /> */}
                    <motion.div className="map-button justify-center align-vertical" whileTap={{ scale: 0.9 }} onClick={this.currentLocation}>
                        <CurrentLocation className="location" />
                    </motion.div>
                    <motion.div className="map-button-double justify-center align-vertical py-sm" whileTap={{ scale: 0.9 }}>
                        <div className="svg-container align-vertical" onClick={this.zoomIn}>
                            <Plus />
                        </div>
                        <div className="svg-container align-vertical" onClick={this.zoomOut}>
                            <Minus />
                        </div>
                    </motion.div>
                    <motion.div className="map-button justify-center align-vertical" whileTap={{ scale: 0.9 }}>
                        <Settings />
                    </motion.div>

                </div>
                <SlidePanel />
                {/* <BottomPanel /> */}
            </div>
        )
    }
}

export default MapOverlay;
