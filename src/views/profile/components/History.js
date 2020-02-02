import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import Timeline from './Timeline';

import 'semantic-ui-css/semantic.min.css';
import '../../../styles/globals.scss';

class History extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dateSelected: 'all',
            groupSelected: 'all'
        }
    }

    handleDateChange = (value) => {
        this.setState({
            dateSelected: value
        })
    }

    handleGroupChange = (value) => {
        this.setState({
            groupSelected: value
        })
    }

    render() {
        const { dateSelected, groupSelected } = this.state;

        const dateOptions = [
            {
                key: 'All',
                text: 'All',
                value: 'All',
            },
            {
                key: 'Date1',
                text: 'Date1',
                value: 'Date1',
            }
        ];

        const groupOptions = [
            {
                key: 'All',
                text: 'All',
                value: 'All',
            },
            {
                key: 'Group1',
                text: 'Group1',
                value: 'Group1',
            }
        ];

        return (
            <div className="history-container my-md">
                <div className="dropdowns my-sm">
                    <div className="flex flex-column">
                        <label className="dropdown-label">Date</label>
                        <Dropdown
                            placeholder='Date'
                            className="dropdown"
                            fluid
                            selection
                            options={dateOptions}
                        />
                    </div>
                    <div className="flex flex-column">
                        <label className="dropdown-label">Group</label>
                        <Dropdown
                            placeholder='Group'
                            className="dropdown"
                            fluid
                            selection
                            options={groupOptions}
                        />
                    </div>
                </div>
                <Timeline />
            </div>
        )
    }
}

export default History;

