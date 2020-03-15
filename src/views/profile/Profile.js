import React, { Component } from 'react';
import axios from 'axios';
import ProfilePicture from './components/ProfilePicture';
import InfoSection from './components/InfoSection';
import History from './components/History';

import './Profile.scss';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: ""
        }
    }

    componentDidMount() {
        const { getUser } = this.props;
        getUser(1);
    }

    render() {
        const { user, savedPins } = this.props;

        if (user) {
            return (
                <div className="profile-container">
                    <ProfilePicture
                        imageUrl='https://images.unsplash.com/photo-1576352890209-456c5ac2af6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'
                        name={user.first_name + ' ' + user.last_name}
                    />
                    <InfoSection
                        header={"Reputation"}
                        reputation
                        content={user.reputation_level}
                    />
                    <InfoSection
                        header={"Location"}
                        content={user.city + ', ' + user.state + ' | ' + user.country}
                    />
                    <History savedPins={savedPins} />
                </div>
            )
        }
        else {
            return <div></div>
        }
    }
}

export default Profile;
