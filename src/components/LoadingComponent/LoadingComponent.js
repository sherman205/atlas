import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

function LoadingComponent() {
    return (
        <Dimmer active>
            <Loader>
                <h1>Stand by, we're loading this map for you</h1>
            </Loader>
        </Dimmer>
    )
}

export default LoadingComponent;
