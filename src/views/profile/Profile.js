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
        axios.get('http://localhost:8000/api/v1/profiles/1/')
            .then(res => {
                let user = this.props.user;
                user.profile = res.data;
                this.props.setUser({ user });
                this.forceUpdate();
            })
    }

    render() {
        const { profile } = this.props.user;

        if (profile) {
            return (
                <div className="profile-container">
                    <ProfilePicture
                        imageUrl='https://images.unsplash.com/photo-1576352890209-456c5ac2af6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'
                        name={profile.first_name + ' ' + profile.last_name}
                    />
                    <InfoSection
                        header={"Reputation"}
                        reputation
                        content={profile.reputation_level}
                    />
                    <InfoSection
                        header={"Location"}
                        content={profile.city + ', ' + profile.state + ' | ' + profile.country}
                    />
                    <History />
                </div>
            )
        }
        else {
            return <div></div>
        }
    }
}

export default Profile;
