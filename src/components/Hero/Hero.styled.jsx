import styled from '@emotion/styled';
// import chef from "../../images/chef.jpg";
import about from "../../images/main/food-g861b60a3e_1920.jpg"
import { Link } from "react-router-dom";


export const Box = styled.div`
    box-sizing: border-box;
    padding-top: 20px;
    margin: 0px;
    flex-direction: row;
    height: 600px;
    font-size: 40px;
    font-weight: 900;
    background-image: url(${about});
    background-size: cover;
    background-position: bottom ;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
`;

export const Hero = styled.h3`
    display: flex;
    justify-content: center;
    color: #33a02f86;

        @media screen and (min-width: 320px) {
        font-size: 20px;
        font-weight: 400;
        }
        @media screen and (min-width: 768px) {
            font-size: 30px;
            font-weight: 500;
        }
        @media screen and (min-width: 1200px) {
        font-size: 40px;
        font-weight: 900;
        }

`;

export const ShopsLink = styled(Link)`
    display: block;
    padding-top: 10px;
    margin: 0px;
    flex-direction: row;
    text-decoration: none;
    font-size: 18px;
    color: #2fa08dc3;
    &:hover,
    &:focus {
            color: green;
            font-size: 22px;
        }
`;