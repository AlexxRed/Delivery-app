import styled from '@emotion/styled';
import mainFood from "../../images/homepage.jpg";

export const Box = styled.div`
    box-sizing: border-box;
    height: 100vh;
    margin: 0px;
    flex-direction: row;
    background-image: url(${mainFood});
    background-repeat: no-repeat;
    background-color: rgb(250, 250, 250);
    background-size: cover;
    background-position: center center;
`;