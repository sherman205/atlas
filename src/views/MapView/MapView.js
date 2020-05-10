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
import { updateSavedPins } from '../../js/actions';

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
        const { updateSearchResults } = this.props;

        const data = event.result.geometry;
        const searchResults = this.buildSearchResult(event.result);
        updateSearchResults({ searchResults });
    };

    buildSearchResult = (result) => {
        const city = result.context.find(item => item.id.includes('place'));
        const state = result.context.find(item => item.id.includes('region'));
        const country = result.context.find(item => item.id.includes('country'));

        const searchResults = {
            latitude: result.geometry.coordinates[1],
            longitude: result.geometry.coordinates[0],
            city: city ? city.text : null,
            state: state ? state.text : null,
            country: country ? country.text : null,
            map_search_text: result.address ? result.address + ' ' + result.text : result.text
        }

        return searchResults;
    }

    showLocationDetailsLabel = () => {
        this.setState({
            showDetailLabel: true
        });
    }

    openLocationDetails = () => {
        const { showInSlidePanel, toggleSidePanel } = this.props;

        const slidePanelContent = 'location_details';
        showInSlidePanel({ slidePanelContent });

        const isSidePanelOpen = true;
        toggleSidePanel({ isSidePanelOpen });

        this.setState({
            showDetailLabel: false
        })
    }

    openLocationDetailsFromPin = (clickedPin) => {
        const { savedPins, updateSearchResults, showInSlidePanel, toggleSidePanel } = this.props;

        const searchResults = savedPins.find(pin => pin.map_search_text === clickedPin);
        updateSearchResults({ searchResults });

        const slidePanelContent = 'location_details';
        showInSlidePanel({ slidePanelContent });

        const isSidePanelOpen = true;
        toggleSidePanel({ isSidePanelOpen });
    }



    render() {
        const { viewport, currentPosition, showDetailLabel, mapLoaded } = this.state;

        const { savedPins, searchResults, updateSearchResults, showInSlidePanel } = this.props;

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
                        if (searchResults.map_search_text !== pin.map_search_text) {
                            return (
                                <Marker
                                    latitude={parseFloat(pin.latitude)}
                                    longitude={parseFloat(pin.longitude)}
                                    key={pin.id}
                                >
                                    <div
                                        className="saved-pin"
                                        onClick={() => this.openLocationDetailsFromPin(pin.map_search_text)}
                                    >
                                        <Label
                                            className="saved-pin-label shadow"
                                            pointing='below'
                                        >
                                            {pin.map_search_text}
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
                            latitude={parseFloat(searchResults.latitude)}
                            longitude={parseFloat(searchResults.longitude)}
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
                                const slidePanelContent = 'profile';
                                updateSearchResults({ searchResults });
                                showInSlidePanel({ slidePanelContent });
                            }}
                        />
                    </div>
                </MapGL>
                <MapOverlay zoomCallback={this.handleZoom} geolocation={this.getCurrentPosition} />
                {/* {!mapLoaded &&
                    <LoadingComponent />
                } */}
            </div>
        )
    }
}

export default MapView;
