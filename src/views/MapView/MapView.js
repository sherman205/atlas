import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import MapOverlay from '../../components/MapOverlay/MapOverlay';
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";

import { ReactComponent as CurrentLocation } from '../../assets/svg/pin.svg';
import { ReactComponent as SearchLocation } from '../../assets/svg/generalLocation.svg';

import 'mapbox-gl/dist/mapbox-gl.css';
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import './MapView.scss';

const TOKEN = 'pk.eyJ1IjoicndvbGZlMjIiLCJhIjoiY2szdW5ndmx6MGY2czNtczF3NjdxYXpnayJ9.nhgDynrUo5SYRLezWq00Wg';

class MapView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPosition: {},
            viewport: {
                latitude: 37.785164,
                longitude: -100,
                zoom: 3.5,
            },
            searchResult: {}
        },
        }
}

mapRef = React.createRef()

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
    const zoom = this.state.viewport.zoom >= 10 ? this.state.viewport.zoom : 10;
    this.setState({
        currentPosition: pos,
        viewport: {
            ...this.state.viewport,
            latitude: pos.lat,
            longitude: pos.lng,
            zoom
        }
    })
}

handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this._onViewportChange({
        ...viewport,
        ...geocoderDefaultOverrides
    });
};

handleOnResult = event => {
    const data = event.result.geometry;
    this.setState({
        searchResults: {
            latitude: data.coordinates[0],
            longitude: data.coordinates[1],
        }
    });
};

render() {
    const { viewport, currentPosition, searchResult } = this.state;
    return (
        <div className="map-view">
            <MapGL
                ref={this.mapRef}
                {...viewport}
                width="100%"
                height="100%"
                onViewportChange={this._onViewportChange}
                mapStyle="mapbox://styles/mapbox/light-v9"
                mapboxApiAccessToken={TOKEN}
            >
                {Object.keys(currentPosition).length !== 0 ? (
                    <Marker
                        latitude={currentPosition.lat}
                        longitude={currentPosition.lng}
                    >
                        <div className="current-location"><CurrentLocation /></div>
                    </Marker>
                ) : (
                        <div></div>
                    )}
                {Object.keys(searchResult).length !== 0 ? (
                    <Marker
                        latitude={searchResult.lat}
                        longitude={searchResult.lng}
                    >
                        <div className="search-location"><SearchLocation /></div>
                    </Marker>
                ) : (
                        <div></div>
                    )}
                <div className="box-shadow m-lg">
                    <Geocoder
                        mapRef={this.mapRef}
                        onResult={this.handleOnResult}
                        onViewportChange={this.handleGeocoderViewportChange}
                        mapboxApiAccessToken={TOKEN}
                        placeholder="Search for a destination"
                        position="top-left"
                    />
                </div>
            </MapGL>
            <MapOverlay zoomCallback={this.handleZoom} geolocation={this.getCurrentPosition} />
        </div>
    )
}
}

export default MapView;
