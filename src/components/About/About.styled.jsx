import styled from '@emotion/styled';
import chef from "../../images/chef.jpg";


export const Box = styled.div`
    box-sizing: border-box;
    height: 100vh;
    padding-top: 20px;
    margin: 0px;
    flex-direction: row;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    padding: 15px;
    height: 700px;
    font-size: 40px;
    font-weight: 900;
    background-image: url(${chef});
    background-size: cover;
    background-position: bottom ;
    width: 100%;
    color: #32d12fc7;
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