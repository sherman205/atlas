import React, { Component } from 'react';
import { Divider, Button, Icon, Label } from 'semantic-ui-react';
import { ReactComponent as SavedPin } from '../../assets/svg/saved_pin.svg';
import moment from 'moment';
import axios from 'axios';
import Unsplash, { toJson } from 'unsplash-js';

import './LocationDetails.scss';

const unsplash = new Unsplash({ accessKey: "GWRcJc_N43utDpEyryTawsicCjlfTmEy5O4oymr344I" });


class LocationDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: false,
            url: null,
        }
    }

    componentDidMount() {
        const { searchResults } = this.props;
        unsplash.search.photos(searchResults.map_search_text, 1, { orientation: "landscape" })
            .then(toJson)
            .then(json => {
                this.setState({ url: json.results[0].urls.regular });
            });
    }

    togglePin = () => {
        const { saved } = this.state;
        const { removePin, savedPins, savePin, searchResults, user } = this.props;

        const isCurrentlySaved = this.isCurrentlySaved();

        if (!isCurrentlySaved) {
            const pin = {
                ...searchResults,
                date: moment().format(),
                user_id: user.id
            }
            savePin(pin);
        }
        else {
            removePin(isCurrentlySaved.id);
        }
    }

    isCurrentlySaved = () => {
        const { savedPins, searchResults } = this.props;

        return savedPins.find(pin => pin.map_search_text === searchResults.map_search_text);
    }

    render() {
        const { searchResults } = this.props;

        const isCurrentlySaved = this.isCurrentlySaved();
        if (searchResults.map_search_text) {

            return (
                <div>
                    <div className="image-container">
                        {this.state.url && <img src={this.state.url}></img>}
                    </div>

                    <div className="location-details flex flex-column my-lg">
                        <div className="flex">
                            <h1 className="location-details-header my-sm">{searchResults.map_search_text}</h1>
                        </div>
                        <h4 className="location-details-subheader my-sm">{searchResults.state} | {searchResults.country}</h4>
                        <Divider />
                        <p>Bunch of content related to location goes here</p>
                        <Button as='div' labelPosition='right' size='mini' onClick={this.togglePin}>
                            <Button basic color={`${isCurrentlySaved ? 'blue' : 'red'}`} size='mini' className="flex flex-column justify-center">
                                <SavedPin />
                            </Button>
                            <Label as='a' color={`${isCurrentlySaved ? 'blue' : 'red'}`} size='mini' pointing='left'>
                                {isCurrentlySaved ? 'Location pinned' : 'Pin this location'}
                            </Label>
                        </Button>
                    </div >
                </div>
            )
        }
        else {
            return <div></div>
        }
    }
}

export default LocationDetails
