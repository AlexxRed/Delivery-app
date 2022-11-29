import styled from '@emotion/styled';

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: fit-content;
    height: fit-content;
    border-radius: 5px;
    margin-left: 0px;
    margin-right: 15px;
    margin-top:60px;
    background-color: #8080809d;
    list-style: none;
    @media (min-width: 320px) and (max-width: 1200px) {
        margin-top: 0px;
        margin-left: auto;
        margin-right: auto;
        padding: 0px;
        margin-left: 5px;
    }
`;

export const ListItem = styled.li`
    border-bottom: 1px  #2778a7;
    margin-bottom: 0px;
`;

export const CardPhoto = styled.img`
    display:block;
    padding-left: 15px;
    height: 400px;
    width: 600px;
    margin: 0px;
    border-radius: 10px;
        @media (min-width: 320px) and (max-width: 1200px) {
            max-height: 200px;
            max-width: 300px;
    }
`;

export const CardButton = styled.button`
    display:block;
    padding: 10px 20px;
    border-radius: 10px 2px;
    border: 0px;
    outline: none;
    margin-bottom: 15px;
    margin-left: 30px;
    cursor: pointer;
    &:hover,
    &:focus {
        outline: none;
        background-color: #33a02ff0;
        color: #ffffff;
    }
            @media (min-width: 320px) and (max-width: 1200px) {
            font-size: 14px;
            font-weight: 200;
    }
`;

export const CardName = styled.p`
    display:block;
    padding-left: 15px;
    color: #0a415a;
    font-size: 24px;
    font-weight: 500;
    margin: 0px;
    margin-bottom: 15px;
        @media (min-width: 320px) and (max-width: 1200px) {
            font-size: 14px;
            font-weight: 200;
    }
`;

export const CardPrice = styled.p`
    display:block;
    padding-left: 15px;
    color: #0a415a;
    font-size: 24px;
    font-weight: 500;
    margin: 0px;
    margin-bottom: 15px;
        @media (min-width: 320px) and (max-width: 1200px) {
            font-size: 18px;
            font-weight: 400;
    }
`;

export const CardInfo = styled.div`
    display: flex;
    background-color: #2bff003b;
    padding-top:10px;
    margin-left:15px;
`;
