// import { useState } from 'react';
import { LableForm, Box, RegisterForm, FormTitle, InputForm, FormButton, Text } from "./RegisterForm.styled";
import { Formik, ErrorMessage } from 'formik';
import validationSchemaRegister from '../../services/validationSchemaRegister';
import { Link } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch } from 'react-redux';
import  operations  from '../../redux/auth/authOperations';



export default function RegisterPage() {
    const dispatch = useDispatch();


    const initialValues = {
        name: '',
        email: '',
        phone: '',
        password: '',
        repeat_password: ''
    };


    const handleSubmit = (values, { resetForm }) => {
        dispatch(operations.register(values));
        console.log(values);
        resetForm();
    };

    const renderError = message => Notify.info(`${message}`);

    return (
        <Box>
            <FormTitle>Please register to use the Delivery service</FormTitle>
            
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchemaRegister}
            >
                <RegisterForm autoComplete="on">
                    <LableForm htmlFor="name">
                    Name
                        <InputForm type="text"
                            name="name"
                            placeholder="Your name"
                        />
                    </LableForm>
                    <ErrorMessage name="name" render={renderError} />

                    <LableForm htmlFor="email">
                    Email
                        <InputForm
                            type="email"
                            name="email"
                            placeholder="Your email"        
                        />
                    </LableForm>
                    <ErrorMessage name="email" render={renderError} />

                    <LableForm htmlFor="phone">
                    Phone
                        <InputForm
                            type="phone"
                            name="phone"
                            placeholder="Your phone number"        
                        />
                    </LableForm>
                    <ErrorMessage name="phone" render={renderError} />

                    <LableForm htmlFor="password">
                    Password
                        <InputForm
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                    </LableForm>
                    <ErrorMessage name="password" render={renderError} />

                    <LableForm htmlFor="repeat_password">
                    Repeat password
                        <InputForm
                            type="repeat_password"
                            name="repeat_password"
                            placeholder="Repeat password"
                        />
                    </LableForm>
                    <ErrorMessage name="repeat_password" render={renderError} />

                    <FormButton type="submit">Register</FormButton>
                </RegisterForm>
            </Formik>
        
            <Text>Already have account?</Text>
            <Text>
                <Link to="/login"
                    style={{ textDecoration: "none", fontSize: 18, color: "#b027da" }}>Login
                </Link>
            </Text>
        </Box>
    );
};