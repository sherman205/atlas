import React, { Component } from 'react';
import MapSearch from '../MapSearch/MapSearch';
import { ReactComponent as CurrentLocation } from '../../assets/svg/current_location.svg';
import { ReactComponent as Plus } from '../../assets/svg/plus.svg';
import { ReactComponent as Minus } from '../../assets/svg/minus.svg';
import { ReactComponent as Settings } from '../../assets/svg/settings.svg';

import './MapOverlay.scss';
import SlidePanel from '../SlidePanel/SlidePanel';

class MapOverlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false
        }
    }

    onMenuClick = () => {
        this.setState({ showMenu: !this.state.showMenu });
    }

    render() {
        return (
            <div>
                <div className="map-overlay m-lg">
                    <MapSearch />
                    <div className="map-button justify-center align-vertical">
                        <CurrentLocation className="location" />
                    </div>
                    <div className="map-button-double justify-center align-vertical">
                        <Plus />
                        <Minus />
                    </div>
                    <div className="map-button justify-center align-vertical">
                        <Settings />
                    </div>
                    {/* <div className="menu" onClick={this.onMenuClick}>
                        <Menu />
                    </div> */}
                </div>
                <SlidePanel />
            </div>
        )
    }
}

export default MapOverlay;
