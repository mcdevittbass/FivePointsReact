import React from 'react';
import { EVENTPHOTOS } from '../shared/eventphotos';
import { TOASTPHOTOS } from '../shared/toastphotos';
import UncontrolledCarousel from 'reactstrap/lib/UncontrolledCarousel';

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

