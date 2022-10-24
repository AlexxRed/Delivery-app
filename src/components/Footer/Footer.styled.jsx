import styled from '@emotion/styled';

export const Container = styled.footer`
    display: flex;
    margin-top: 10px;
    justify-content: center;
    background-color: #b33131;
    width: 100%;
    height: 20px;
    @media screen and (min-width: 320px) {
        padding: 20px 0;
        text-align: center;
        background: var(--white-color);
        flex-direction: column;
    }
    @media screen and (min-width: 768px) {
        flex-direction: row;
    }
    @media screen and (min-width: 1280px) {
    }
`;

export const CompanyInfo = styled.p`
    font-weight: 500;
    margin-right: 30px;
`

export const Tel = styled.p`
    text-decoration: none;
    font-weight: 500;
`