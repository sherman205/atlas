import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

import './LocationDetails.scss';

class LocationDetails extends Component {
    render() {
        return (
            <div className="location-details flex flex-column mx-lg px-lg">
                <h1 className="location-details-header my-sm">Portland</h1>
                <h4 className="location-details-subheader my-sm">Oregon | United States</h4>
                <Divider />
                <p>Bunch of content related to location goes here</p>
            </div>
        )
    }
}

export default LocationDetails
