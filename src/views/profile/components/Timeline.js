import React from 'react';
import TimelineItem from './TimelineItem';
import '../Profile.scss';

function Timeline() {

    const items = [
        {
            date: '10/4/01',
            location: 'Havertown, PA | USA'
        },
        {
            date: '10/4/01',
            location: 'Seattle, WA | USA'
        },
        {
            date: '10/4/01',
            location: 'Glacier National Park, Montana | USA'
        },
        {
            date: '10/4/01',
            location: 'Havertown, PA | USA'
        },
        {
            date: '10/4/01',
            location: 'Seattle, WA | USA'
        },
        {
            date: '10/4/01',
            location: 'Glacier National Park, Montana | USA'
        },
        {
            date: '10/4/01',
            location: 'Seattle, WA | USA'
        },
        {
            date: '10/4/01',
            location: 'Glacier National Park, Montana | USA'
        },


    ]

    return (
        <div className="timeline-container">
            <div className="timeline p-sm">
                {items.map((item, index) =>
                    <TimelineItem item={item} key={item.location} last={index === items.length - 1 ? true : false} />
                )}
            </div>
            {items.length > 2 &&
                <div className="background-container" />
            }
        </div>
    )
}

export default Timeline;
