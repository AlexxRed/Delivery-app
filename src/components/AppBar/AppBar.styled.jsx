import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';

export const Logo = styled(DinnerDiningIcon)`
    display: block;
    text-align: center;
    padding: 6px;
    overflow: hidden;
    height: 60px;
    width: 60px;
    fill: #0e4e05;
    &:hover,
    &:focus {
            fill: #076e2f;
        }
`;

export const Link = styled(NavLink)`
    margin: auto;
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 500;
    color: #2a363b;
    font-size: 18px;
    &:hover,
    &:focus {
            color: #da4e44;
            font-size: 20px;
            font-weight: 900;
        }
    &.active {
        color: #a82993;
    }
`;

export const Header = styled.header`
    display: block;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;
    margin-bottom: 0px;
    background-color: #33a02ff0;
    border-bottom: 1px solid #2a363b;
`;
export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const Box = styled.div`
    display: flex;
    justify-content: center;
`;
