import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

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
                width: '100%',
                height: '100vh',
                latitude: 37.785164,
                longitude: -100,
                zoom: 3.5,
            }
        }
    }

    render() {
        return (
            <div>
                <ReactMapGL
                    {...this.state.viewport}
                    onViewportChange={(viewport) => this.setState({ viewport })}
                    mapStyle="mapbox://styles/mapbox/light-v9"
                    mapboxApiAccessToken={TOKEN}

                />
            </div>
        )
    }
}

export default MapView;
