import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import MapOverlay from '../../components/MapOverlay/MapOverlay';

import 'mapbox-gl/dist/mapbox-gl.css';
import './MapView.scss';

const TOKEN = 'pk.eyJ1IjoicndvbGZlMjIiLCJhIjoiY2szdW5ndmx6MGY2czNtczF3NjdxYXpnayJ9.nhgDynrUo5SYRLezWq00Wg';

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
        this.setState({ viewport });
    }

    render() {

        const { viewport } = this.state;

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
                <MapOverlay />
            </div>
        )
    }
}

export default MapView;
