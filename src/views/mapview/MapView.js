import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import MapSearch from '../../components/MapSearch/MapSearch';
import { ReactComponent as CurrentLocation } from '../../assets/svg/current_location.svg';
import { ReactComponent as Plus } from '../../assets/svg/plus.svg';
import { ReactComponent as Minus } from '../../assets/svg/minus.svg';
import { ReactComponent as Settings } from '../../assets/svg/settings.svg';


import 'mapbox-gl/dist/mapbox-gl.css';
import './MapView.scss';

const TOKEN = 'pk.eyJ1IjoicndvbGZlMjIiLCJhIjoiY2szdW5ndmx6MGY2czNtczF3NjdxYXpnayJ9.nhgDynrUo5SYRLezWq00Wg';

const mapStyle = {
    visibility: {
        water: true,
        parks: true,
        buildings: true,
        roads: true,
        labels: true,
        background: true
    },
    color: {
        water: '#DBE2E6',
        parks: '#E6EAE9',
        buildings: '#c0c0c8',
        roads: '#ffffff',
        labels: '#78888a',
        background: '#EBF0F0'
    }
}

class MapView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 37.785164,
                longitude: -100,
                zoom: 3.5,
            }
        }
    }

    _onViewportChange = viewport => {
        this.setState({viewport});
    } 

    render() {

        const {viewport} = this.state;

        return (
            <div className="map-view">
                <ReactMapGL
                    {...viewport}
                    width="100%"
                    height="100%"
                    onViewportChange={this._onViewportChange}
                    mapStyle="mapbox://styles/mapbox/light-v9"
                    mapboxApiAccessToken={TOKEN}
                />
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
                </div>
            </div >
        )
    }
}

export default MapView;
