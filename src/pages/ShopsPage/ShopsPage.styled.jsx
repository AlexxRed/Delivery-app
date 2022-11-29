import styled from '@emotion/styled';
import wood from "../../images/wood.jpg";

export const Box = styled.div`
    display: flex;
    box-sizing: border-box;
    min-height:100vh;
    max-width: 100vw;
    padding-top: 20px;
    margin: 0px;
    flex-direction: row;
    background-image: url(${wood});
    background-repeat: no-repeat;
    background-color: rgb(250, 250, 250);
    background-size: cover;
    background-position: center ;
    background-attachment: fixed;
        @media (min-width: 320px) and (max-width: 355px) {
            background-image: none;
            background-color: #7188729d;
        }
        @media (min-width: 320px) and (max-width: 780px) {
            display: block;
        }
`;