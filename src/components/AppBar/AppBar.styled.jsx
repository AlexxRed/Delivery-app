import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { GiKnifeFork } from 'react-icons/gi'

export const Logo = styled(GiKnifeFork)`
    display: block;
    text-align: center;
    padding: 6px;
    overflow: hidden;
    height: 50px;
    width: 50px;
    fill: #0e4e05;
    &:hover,
    &:focus {
            fill: #d637b4d5;
        }
`;

export const Link = styled(NavLink)`
    margin: auto;
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 500;
    color: #0a415a;
    font-size: 18px;
    &:hover,
    &:focus {
            color: #da4e44;
            font-size: 20px;
        }
    &.active {
        color: #d637b4d5;
    }
`;

export const Header = styled.header`
    display: block;
    justify-content: space-between;
    align-items: center;
    min-height: 80px;
    margin-bottom: 0px;
    background-color: #33a02ff0;
    border-bottom: 1px solid #0a415a;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    flex-shrink: 0;
    position: fixed;
    z-index: 1001;
    top: 0px;
    left: auto;
    right: 0px;
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

export const Basket = styled(ShoppingCartIcon)`
    display: block;
    text-align: center;
    padding-top: 20px;
    overflow: hidden;
    height: 30px;
    width: 30px;
    fill: #0e4e05;
    &:hover,
    &:focus {
            fill: #d637b4d5;
        }
`;
export const BasketText = styled.p`
    position: absolute;
    top: 0;
    right: 0;
    display:flex;
    align-items: center;
    justify-content:center;
    text-align:center;
    border-radius: 50%;
    background-color: #fff;
    color: #33a02ff0;
    padding:5px;
    width: 6px;
    height:6px;
`;
export const Wrapper = styled.div`
    position: relative;
`;

export const Text = styled.h4`
    display: block;
    margin-left: auto;
    margin-right: 15px;
    color: #0a415a;
    @media (min-width: 320px) and (max-width: 670px) {
        display: none;
    }
`