import React from 'react';

import '../../../styles/globals.scss';

function ProfilePicture(props) {
    return (
        <div className="justify-center">
            <div>
                <div className="image-wrapper">
                    <img src={props.imageUrl} />
                </div>
                <h2 className="justify-center m-sm">{props.name}</h2>
            </div>
        </div>
    )
}

export default ProfilePicture;
