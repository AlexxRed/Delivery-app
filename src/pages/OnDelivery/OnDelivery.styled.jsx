import styled from '@emotion/styled';

import onDelivery from "../../images/delivery_order.png";

export const Box = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    box-sizing: border-box;
    height: 100vh;
    margin: 0px;
    max-width: 100%;
    flex-direction: row;
    background-image: url(${onDelivery});
    background-repeat: no-repeat;
    background-color: rgb(250, 250, 250);
    background-size: cover;
    background-position: center center;
`;

export const Text = styled.h3`
    display: flex;
    font-size: 40px;
    font-weight: 900;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* margin-top: auto; */
    color: #0077ff;
`;