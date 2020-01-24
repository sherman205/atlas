import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import MapOverlay from '../../components/MapOverlay/MapOverlay';
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";

import 'mapbox-gl/dist/mapbox-gl.css';
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
            searchResult: null
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
        this.setState({
            currentPosition: pos,
            viewport: {
                ...this.state.viewport,
                latitude: pos.lat,
                longitude: pos.lng,
                zoom: 5
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
        this.setState({
          searchResult: new GeoJsonLayer({
            id: "search-result",
            data: event.result.geometry
          })
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
                            <div>I'm Here!!!</div>
                        </Marker>
                        ) : (
                        <div></div>
                    )}
                    <Geocoder
                        mapRef={this.mapRef}
                        onResult={this.handleOnResult}
                        onViewportChange={this.handleGeocoderViewportChange}
                        mapboxApiAccessToken={TOKEN}
                        placeholder="Search for a destination"
                        position="top-left"
                    />
                    <DeckGL {...viewport} layers={[searchResult]} />
                </MapGL>
                <MapOverlay zoomCallback={this.handleZoom} geolocation={this.getCurrentPosition}/>
            </div>
        )
    }
}

export default MapView;
