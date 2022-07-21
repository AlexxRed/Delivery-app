import styled from '@emotion/styled';
import food from "../../images/prepare.jpg";

export const Box = styled.div`
    display: flex;
    box-sizing: border-box;
    min-height:100vh;
    width: 100%;
    padding-top: 20px;
    margin: 0px;
    flex-direction: row;
    background-image: url(${food});
    background-repeat: no-repeat;
    background-color: rgb(250, 250, 250);
    background-size: cover;
    background-position: center ;
    background-attachment: fixed;
    `