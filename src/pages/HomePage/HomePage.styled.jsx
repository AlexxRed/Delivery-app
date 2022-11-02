import styled from '@emotion/styled';
import about from "../../images/main/food-g861b60a3e_1920.jpg"

export const Box = styled.div`
    box-sizing: border-box;
    height: 100vh;
    padding-top: 20px;
    margin: 0px;
    flex-direction: row;
`;

export const Hero = styled.h3`
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    height: 500px;
    font-size: 40px;
    font-weight: 900;
    background-image: url(${about});
    background-size: cover;
    background-position: bottom ;
    width: 100%;
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

export const TitleName = styled.h2`
    display: block;
    text-align: center;
    margin-top: 150px;
`