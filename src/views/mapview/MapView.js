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
            currentPosition: {
                lat: 37.785164,
                lng: -100
            },
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

    handleZoom = (direction) => {
        const inc = direction === "in" ? .5 : -.5;
        this.setState({
            viewport: {                  
                ...this.state.viewport,
                zoom: this.state.viewport.zoom + inc
            }

        })
    }

    getCurrentPosition = (pos) => {
        this.setState({
            currentPosition: {
                ...this.state.currentPosition,
                lat: pos.lat,
                lng: pos.lng
            }
        })
    }

    render() {
        const { viewport, currentPosition } = this.state;
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
                <MapOverlay zoomCallback={this.handleZoom} geolocation={this.getCurrentPosition}/>
            </div>
        )
    }
}

export default MapView;
