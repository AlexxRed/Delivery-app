import styled from '@emotion/styled';
import { Form, Field  } from 'formik';

export const Box = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 200px;
    max-width: 380px;
    max-height: 340px;
    background-color: #03c03c;
    border-radius: 15px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
`;

export const FormTitle = styled.h3`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: auto;
`;

export const LogForm = styled(Form)`
    display: block;
    width: 320px;
`;

export const LableForm = styled.label`
    
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 12px,
`;

export const InputForm = styled(Field)`
    display: flex;
    border: 0px;
    box-sizing: content-box;
    outline: none;
    padding: 10px;
    flex-direction: column;
    margin-bottom: 12px;
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
