import React from 'react';
import { ReactComponent as Search } from '../../assets/svg/search.svg';

import './MapSearch.scss';
import '../../styles/globals.scss';

function MapSearch() {
    return (
        <div className="map-search flex">
            <div className="search-icon">
                <Search />
            </div>
            <input
                type="text"
                name="map_search"
                className="shadow"
                placeholder="Search for a destination"
            />
        </div>
    )
}

export default MapSearch;
