import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import MapOverlay from '../../components/MapOverlay';
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";
import { Label } from 'semantic-ui-react';
import LoadingComponent from '../../components/LoadingComponent';

import { ReactComponent as SearchLocation } from '../../assets/svg/pin.svg';
import { ReactComponent as CurrentLocation } from '../../assets/svg/currentLocationDot.svg';
import { ReactComponent as SavedPin } from '../../assets/svg/saved_pin.svg';


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
            showDetailLabel: false,
            mapLoaded: false,
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
        const searchResults = event.result;
        this.props.updateSearchResults({ searchResults });
    };

    showLocationDetailsLabel = () => {
        this.setState({
            showDetailLabel: true
        });
    }

    openLocationDetails = () => {
        const slidePanelContent = 'location_details';
        this.props.showInSlidePanel({ slidePanelContent });

        const isSidePanelOpen = true;
        this.props.toggleSidePanel({ isSidePanelOpen });

        this.setState({
            showDetailLabel: false
        })
    }

    render() {
        const { viewport, currentPosition, showDetailLabel, mapLoaded } = this.state;

        const { savedPins, searchResults, updateSearchResults } = this.props;

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
                    onLoad={() => this.setState({ mapLoaded: true })}
                >
                    {savedPins.map(pin => {
                        console.log(pin.city);
                        console.log(searchResults);
                        if (searchResults.text !== pin.city) {
                            return (
                                <Marker
                                    latitude={parseFloat(pin.latitude)}
                                    longitude={parseFloat(pin.longitude)}
                                    key={pin.id}
                                >
                                    <div className="saved-pin">
                                        <Label
                                            className="saved-pin-label shadow"
                                            //onClick={this.openLocationDetails}
                                            pointing='below'
                                        >
                                            {pin.city}
                                        </Label>
                                        <SavedPin />
                                    </div>
                                </Marker>
                            )
                        }
                    })

                    }
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
                    {Object.keys(searchResults).length !== 0 ? (
                        <Marker
                            latitude={searchResults.center[1]}
                            longitude={searchResults.center[0]}
                        >

                            <div className="search-location" >
                                <Label
                                    className="location-details-label shadow"
                                    onClick={this.openLocationDetails}
                                    pointing='below'
                                >
                                    View location details
                                    </Label>
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
                                const searchResults = {};
                                updateSearchResults({ searchResults });
                            }}
                        />
                    </div>
                </MapGL>
                <MapOverlay zoomCallback={this.handleZoom} geolocation={this.getCurrentPosition} />
                {!mapLoaded &&
                    <LoadingComponent />
                }
            </div>
        )
    }
}

export default MapView;
