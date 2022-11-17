import styled from '@emotion/styled';
import { Form, Field  } from 'formik';

export const Box = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 0px;
    max-width: 480px;
    min-height: 780px;
    background-color: #03c03c;
    border-radius: 15px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
        @media (min-width: 320px) and (max-width: 1200px) {
        max-width: 320px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 10px;
    }
`;

export const FormTitle = styled.h3`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    margin-bottom: 0px;
`;

export const RegisterForm = styled(Form)`
    display: block;
    max-width: 440px;
    @media (min-width: 320px) and (max-width: 1200px) {
        max-width: 320px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const LableForm = styled.label`
    
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 12px,
`;

export const InputForm = styled(Field )`
    display: block;
    min-width: 300px;
    border: 0px;
    box-sizing: content-box;
    outline: none;
    padding: 5px;
    height: 40px;
    flex-direction: column;
    border-radius: 5px;
    &:hover,
    &:focus {
        background-color: #9acfc2c1;
    }
`;

export const FormButton = styled.button`
    padding: 10px 20px;
    border-radius: 10px 2px;
    border: 0px;
    outline: none;
    cursor: pointer;
    margin-top: 10px;
    &:hover,
    &:focus {
        outline: none;
        background-color: #139397;
        color: #ffffff;
    }
`;

export const Text = styled.p`
    display:block;
    width:100%;
    margin: 0px;
    text-decoration: none;
`