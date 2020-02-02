import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

import './LocationDetails.scss';


class LocationDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { searchResults } = this.props;

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
                </div>
            )
        }
        else {
            return <div></div>
        }
    }
}

export default LocationDetails
