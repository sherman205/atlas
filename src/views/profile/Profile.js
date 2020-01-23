import React, { Component } from 'react';
import axios from 'axios';
import ProfilePicture from './components/ProfilePicture';
import InfoSection from './components/InfoSection';

import '../../styles/globals.scss';
import './Profile.scss';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/v1/profiles/')
            .then(res => {
                const profile = res.data;
                this.setState({
                    profile: profile[0]
                });
            })
    }

    render() {
        console.log(this.state.profile);
        return (
            <div className="profile-container">
                <ProfilePicture
                    imageUrl='https://images.unsplash.com/photo-1576352890209-456c5ac2af6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'
                    name="John Smith"
                />
                <InfoSection
                    header={"Reputation"}
                    content={"Well Traveled"}
                />
                <InfoSection
                    header={"Location"}
                    content={"Portland, OR | United States"}
                />
            </div>
        )
    }
}

export default Profile;
