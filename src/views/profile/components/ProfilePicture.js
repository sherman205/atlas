import React from 'react';

import '../../../styles/globals.scss';

function ProfilePicture(props) {
    return (
        <div className="align-vertical flex-column">
            <div className="image-wrapper my-md shadow">
                <img src={props.imageUrl} />
            </div>
            <h2 className="my-sm font-size--lg">{props.name}</h2>
        </div >
    )
}

export default ProfilePicture;
