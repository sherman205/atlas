import React from 'react'

function InfoSection(props) {
    return (
        <div className="info-section my-md px-sm">
            <p className="header m-0">{props.header}</p>
            <p className="content m-0">{props.content}</p>
        </div>
    )
}

export default InfoSection;
