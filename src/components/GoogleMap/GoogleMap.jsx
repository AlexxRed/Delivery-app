import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { useEffect, useRef } from "react";
import { Box } from './GoogleMap.styled';
import { useGeolocated } from "react-geolocated";



const render = (status) => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return null;
};

function MyMapComponent({
    center,
    zoom,
    }) {
    const ref = useRef();
    
    useEffect(() => {
        new window.google.maps.Map(ref.current, {
        center,
        zoom,
        });
    });

    return <div ref={ref} id="map"
    style={{ width: "480px", height: "300px"}}
    />;
}

export default function GoogleMap({ center, zoom, }) {

        const { coords} =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
    
    return (
    <Box>
            <Wrapper apiKey="AIzaSyBFAseYHPAqdGgXTXGNSsmzE_AWmKS5BRQ" render={render} >
                {coords &&
                    <MyMapComponent center={{ lat: coords.latitude, lng: coords.longitude }} zoom={5} isMarkerShown={true} />}
                    {!coords &&<MyMapComponent center={{lat: 1, lng: 1}} zoom={20} isMarkerShown={true}/>}
        </Wrapper>
    
    </Box>
    )
}
