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
                    <div className="map-button justify-center align-vertical" onClick={this.currentLocation}>
                        <CurrentLocation className="location" />
                    </div>
                    <div className="map-button-double justify-center align-vertical py-sm">
                        <div className="svg-container align-vertical" onClick={this.zoomIn}>
                            <Plus />
                        </div>
                        <div className="svg-container align-vertical" onClick={this.zoomOut}>
                            <Minus />
                        </div>
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
