import React, { Component } from 'react';
import { Divider, Button, Icon, Label } from 'semantic-ui-react';
import { ReactComponent as SavedPin } from '../../assets/svg/saved_pin.svg';
import moment from 'moment';

import './LocationDetails.scss';


class LocationDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: false,
        }
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
                </div>
            )
        }
        else {
            return <div></div>
        }
    }
}

export default LocationDetails
