import React from 'react'

function InfoSection(props) {
    return (
        <div className='info-section my-md px-sm font-size--sm'>
            <p className="header m-0">{props.header}</p>
            <p className={`content ${props.reputation ? 'reputation' : ''} m-0`}>{props.content}</p>
        </div>
    )
}

export default InfoSection;
