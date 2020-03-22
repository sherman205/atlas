import React from 'react';
import TimelineItem from './TimelineItem';
import '../Profile.scss';
import moment from 'moment';

function Timeline(props) {
    const { savedPins } = props;

    let items = savedPins.map(pin => {
        return {
            date: moment(pin.date).format("MMM Do YY"),
            location: pin.map_search_text //+ ' | ' + pin.country              // Feb 17th 20
        }
    });

    return (
        <div className="timeline-container">
            <div className="timeline p-sm">
                {items.map((item, index) =>
                    <TimelineItem item={item} key={index} last={index === savedPins.length - 1 ? true : false} />
                )}
            </div>
            {savedPins.length > 2 &&
                <div className="background-container" />
            }
        </div>
    )
}

export default Timeline;
