import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { useEffect, useRef } from "react";
import { Box } from './GoogleMap.styled';


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

export default function GoogleMap({center,zoom,}){
    return (
    <Box>
        <Wrapper apiKey="AIzaSyBFAseYHPAqdGgXTXGNSsmzE_AWmKS5BRQ" render={render} >
            <MyMapComponent center={{lat: 50.450001, lng: 30.523333}} zoom={5} isMarkerShown={true}/>
        </Wrapper>
    
    </Box>
    )
}

            