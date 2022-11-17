import styled from '@emotion/styled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from "react-router-dom";

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 500px;
    height: fit-content;
    padding-left: 0px;
    border-radius: 5px;
    margin-left: 30px;
    margin-top:80px;
    background-color: #808080d5;
        @media (max-width: 420px) {
        max-width: 280px;
    }
        @media (min-width: 320px) and (max-width: 1200px) {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px dotted #2778a7;
    margin-bottom: 0px;
`;

export const ListButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0px;
`;

export const OrderImage = styled.img`
    display: block;
    width: 100px;
    height: 60px;
`;

export const OrderBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 440px;
    padding: 15px;
`;
export const OrderText = styled.p`
    display:block;
    color: #0a415a;
    font-size: 18px;
    font-weight: 500;
    margin: 0px;
`;

export const ButtonDelete = styled(DeleteForeverIcon)`
    cursor: pointer;
    margin-left: 15px;
    border-radius: 3px;
    padding: 5px 5px;
    color: #ffffff;
    font-weight: 500;
    &:hover,
    &:focus {
        background-color: #bb4d1a;
    }
`;
export const ButtonAdd = styled(AddIcon)`
    cursor: pointer;
    border-radius: 3px;
    padding: 5px 5px;
    color: #141414;
    font-weight: 500;
    &:hover,
    &:focus {
        fill:green;
    }
`;
export const ButtonDecrease = styled(RemoveIcon)`
    cursor: pointer;
    border-radius: 3px;
    padding: 5px 5px;
    color: #5e5b5b;
    font-weight: 500;
    &:hover,
    &:focus {
        fill: #bb4d1a;
    }
`;
export const Wrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
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
        }
`;