import styled from '@emotion/styled';
import FastfoodIcon from '@mui/icons-material/Fastfood';
export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 350px;
    padding-left: 0px;
    border-radius: 5px;
    margin-left: 30px;
    margin-right: auto;
    margin-top:100px;
    background-color: #8080809d;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px dotted #2778a7;
    margin-bottom: 0px;
`;

export const ShopAvatar = styled(FastfoodIcon)`
    display: block;
    align-items: center;
    fill: #33a02ff0;
    width: 40px;
    height: 40px;
    &:hover,
    &:focus {
            fill: #d637b4d5;
        }
`;

export const ShopBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 300px;
    padding: 15px;
`;
export const ShopName = styled.p`
    display:block;
    padding-left: 15px;
    color: #0a415a;
    font-size: 24px;
    font-weight: 500;
    margin: 0px;
    &:hover,
    &:focus {
            color: #d637b4d5;
        }
`;