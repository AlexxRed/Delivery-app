import styled from '@emotion/styled';

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: fit-content;
    height: fit-content;
    padding-left: 0px;
    border-radius: 5px;
    margin-left: 30px;
    /* margin-right: auto; */
    margin-top:100px;
    background-color: #8080809d;
    list-style: none;
`;

export const ListItem = styled.li`
    /* display: flex;
    align-items: center;
    justify-content: space-between; */
    border-bottom: 1px dotted #2778a7;
    margin-bottom: 0px;
`;

export const CardPhoto = styled.img`
    display:block;
    padding-left: 15px;
    color: #0a415a;
    height: 400px;
    width: 620px;
    margin: 0px;
`;

export const CardName = styled.p`
    display:block;
    padding-left: 15px;
    color: #0a415a;
    font-size: 24px;
    font-weight: 500;
    margin: 0px;
`;