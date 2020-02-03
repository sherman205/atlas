import React, { Component } from 'react';
import { Divider, Button, Icon, Label } from 'semantic-ui-react';
import { ReactComponent as SavedPin } from '../../assets/svg/saved_pin.svg';

import './LocationDetails.scss';


class LocationDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: false,
        }
    }

    render() {
        const { searchResults } = this.props;
        const { saved } = this.state;

        if (searchResults.text) {

            let { state, country } = '';

            const searchDisplay = (searchResults.address ? searchResults.address + ' ' : '') + searchResults.text

            searchResults.context.map(item => {
                if (item.id.includes('region')) {
                    state = item.text;
                }
                if (item.id.includes('country')) {
                    country = item.text;
                }
            })
            return (
                <div className="location-details flex flex-column my-lg">
                    <div className="flex">
                        <h1 className="location-details-header my-sm">{searchDisplay}</h1>
                    </div>
                    <h4 className="location-details-subheader my-sm">{state} | {country}</h4>
                    <Divider />
                    <p>Bunch of content related to location goes here</p>
                    <Button as='div' labelPosition='right' size='mini' onClick={() => this.setState({ saved: true })}>
                        <Button basic color={`${saved ? 'blue' : 'red'}`} size='mini' className="flex flex-column justify-center">
                            <SavedPin />
                        </Button>
                        <Label as='a' color={`${saved ? 'blue' : 'red'}`} size='mini' pointing='left'>
                            {saved ? 'Location pinned' : 'Pin this location'}
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