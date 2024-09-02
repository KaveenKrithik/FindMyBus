import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './MapPage.css';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const MapPage = () => {
    return (
        <div className="map-container">
            <LoadScript googleMapsApiKey="AIzaSyCPMJL1Bb7S9S16iOrYZOzaCqDsV-43WL4">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default MapPage;
