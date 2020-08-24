import React from 'react';
import { EVENTPHOTOS } from '../shared/eventphotos';
import { TOASTPHOTOS } from '../shared/toastphotos';
import UncontrolledCarousel from 'reactstrap/lib/UncontrolledCarousel';

/*IMPORTANT Be sure to set className in createElement for "img" in reactstrap UncontrolledCarousel line 132 
className: item.className 
Otherwise, images will be too large - do this after installing anything to node_modules*/
export function EventCarousel(props) {
    return (
        <React.StrictMode>
            <UncontrolledCarousel items={EVENTPHOTOS}/>
        </React.StrictMode>
    )
}

export function ToastCarousel(props) {
    return (
        <React.StrictMode>
            <UncontrolledCarousel items={TOASTPHOTOS} />
        </React.StrictMode>
    )
}

