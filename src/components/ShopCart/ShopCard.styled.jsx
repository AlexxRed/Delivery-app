import styled from '@emotion/styled';

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: fit-content;
    height: fit-content;
    padding-left: 30px;
    border-radius: 5px;
    margin-left: 15px;
    margin-right: 15px;
    /* margin-right: auto; */
    margin-top:150px;
    background-color: #8080809d;
    list-style: none;
    @media (max-width: 420px) {
        max-width: 420px;
    }
`;

export const ListItem = styled.li`
    /* display: flex;
    align-items: center;
    justify-content: space-between; */
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
`;

export const CardName = styled.p`
    display:block;
    padding-left: 15px;
    color: #0a415a;
    font-size: 24px;
    font-weight: 500;
    margin: 0px;
    margin-bottom: 15px;
`;

export const CardPrice = styled.p`
    display:block;
    padding-left: 15px;
    color: #0a415a;
    font-size: 24px;
    font-weight: 500;
    margin: 0px;
    margin-bottom: 15px;
`;
export const CardInfo = styled.div`
    display: flex;
    background-color: #2bff003b;
    padding-top:10px;
    margin-left:15px;
`;
