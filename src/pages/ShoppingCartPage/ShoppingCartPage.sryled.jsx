import styled from '@emotion/styled';
import food from "../../images/prepare.jpg";

export const Box = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    box-sizing: border-box;
    min-height:100vh;
    width: 100%;
    margin: 0px;
    flex-direction: row;
    background-image: url(${food});
    background-repeat: no-repeat;
    background-color: rgb(250, 250, 250);
    background-size: cover;
    background-position: center ;
    background-attachment: fixed;
`;

export const Wrapper = styled.div`
        margin-top: 80px;
    display: block;
    background-color: #03c03c;
    padding: 5px;
    border-radius: 15px;
`;