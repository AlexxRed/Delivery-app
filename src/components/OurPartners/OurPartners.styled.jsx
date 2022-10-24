import styled from '@emotion/styled';
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import SetMealIcon from '@mui/icons-material/SetMeal';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    margin-left: 15px;
    margin-right: 15px;
    margin-top:50px;
    list-style: none;
    padding: 0px;
    @media (min-width: 670px) and (max-width: 1370px) {
        margin-top: 50px;
        grid-template-columns: repeat(3, 1fr);
    }
        @media (min-width: 320px) and (max-width: 670px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Wrapper = styled.div`
    display: block;
    border-radius: 5px;
    margin: 0px auto;
`   

export const ShopName = styled.p`
    display:block;
    text-align: center;
    margin: 0px auto;
    color: #0a415a;
    font-size: 24px;
    font-weight: 500;
        @media (min-width: 320px) and (max-width: 1200px) {
            font-size: 18px;
            font-weight: 500;
    }
`;

export const Item = styled.li`
    display: flex;
    flex-wrap: wrap;
`;

export const MeatAvatar = styled(KebabDiningIcon)`
    display: block;
    align-items: center;
    fill: #33a02ff0;
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
`;

export const JapanAvatar = styled(SetMealIcon)`
    display: block;
    align-items: center;
    fill: #33a02ff0;
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
`;

export const SaladderAvatar = styled(DinnerDiningIcon)`
    display: block;
    align-items: center;
    fill: #33a02ff0;
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
`;

export const BurgerAvatar = styled(FastfoodIcon)`
    display: block;
    align-items: center;
    fill: #33a02ff0;
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
`;

export const BakeryAvatar = styled(BakeryDiningIcon)`
    display: block;
    align-items: center;
    fill: #33a02ff0;
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
`;

export const PizzaAvatar = styled(LocalPizzaIcon)`
    display: block;
    align-items: center;
    fill: #33a02ff0;
    width: 40px;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
`;



