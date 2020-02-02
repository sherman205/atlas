import React from 'react';

function TimelineItem(props) {

    const { date, location } = props.item;
    const { last } = props.last;

    return (
        <div className="timeline-item-container flex align-vertical font-weight--bold font-size--sm">
            <p className="date">{date}</p>
            <div className="flex flex-column">
                <span className="bullet mx-md" />
                <span className={`vertical-bar ${props.last ? 'last' : ''} mx-md`}></span>
            </div>
            <p className="location">{location}</p>
        </div>
    )
}


export default TimelineItem;