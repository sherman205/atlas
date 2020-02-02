import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import MapOverlay from '../../components/MapOverlay/MapOverlay';
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";
import { Label } from 'semantic-ui-react';

import { ReactComponent as SearchLocation } from '../../assets/svg/pin.svg';
import { ReactComponent as CurrentLocation } from '../../assets/svg/currentLocationDot.svg';

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
            searchResult: {},
            showDetailLabel: false
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
            searchResult: {
                latitude: data.coordinates[1],
                longitude: data.coordinates[0],
            }
        });
        const searchResults = event.result
        this.props.updateSearchResults({ searchResults });
    };

    showLocationDetailsLabel = () => {
        this.setState({
            showDetailLabel: true
        });
    }

    openBottomNav = () => {
        const isBottomPanelOpen = !this.props.isBottomPanelOpen;
        this.props.toggleBottomPanel({ isBottomPanelOpen });

        this.setState({
            showDetailLabel: false
        })
    }

    render() {
        const { viewport, currentPosition, searchResult, showDetailLabel } = this.state;

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
                            latitude={searchResult.latitude}
                            longitude={searchResult.longitude}
                        >

                            <div className="search-location" >
                                {showDetailLabel &&
                                    <Label
                                        className="location-details-label shadow"
                                        onClick={this.openBottomNav}
                                        pointing='below'
                                    >
                                        View location details
                                    </Label>
                                }
                                <SearchLocation onClick={this.showLocationDetailsLabel} />
                            </div>
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
                            onClear={() => {
                                this.setState({
                                    searchResult: {}
                                })
                            }}
                        />
                    </div>
                </MapGL>
                <MapOverlay zoomCallback={this.handleZoom} geolocation={this.getCurrentPosition} />
            </div>
        )
    }
}

export default MapView;
