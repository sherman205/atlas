import React from 'react';

import './BreadCrumbs.scss';

export default function BreadCrumbs(props) {
    const { searchResults, showInSlidePanel, slidePanelContent } = props;

    const updateSlidePanel = (panel) => {
        const { showInSlidePanel } = props;

        const slidePanelContent = panel;
        showInSlidePanel({ slidePanelContent });
    }

    console.log(slidePanelContent);
    return (
        <div className="breadcrumbs flex font-size--xsm font-weight--normal">
            <span
                className={`crumb ${slidePanelContent === 'profile' ? '-active' : ''} `}
                onClick={() => updateSlidePanel('profile')}
            >
                Profile
            </span>
            {searchResults.map_search_text &&
                <div>
                    <span>&nbsp;>&nbsp;</span>
                    <span
                        className={`crumb ${slidePanelContent === 'location_details' ? '-active' : ''}`}
                        onClick={() => updateSlidePanel('location_details')}
                    >
                        Location
                    </span>
                </div>
            }
        </div>
    )
}
