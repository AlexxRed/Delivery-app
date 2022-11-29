import { useState } from 'react';
import { LableForm, Box, RegisterForm, FormTitle, InputForm, FormButton, Text } from "./RegisterForm.styled";
import { Formik, ErrorMessage } from 'formik';
import validationSchemaRegister from '../../services/validationSchemaRegister';
import { Link } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch } from 'react-redux';
import  operations  from '../../redux/auth/authOperations';
import { Loader } from '../Loader/Loader';



export default function RegisterPage() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)


    const initialValues = {
        name: '',
        email: '',
        phone: '',
        password: '',
        repeat_password: ''
    };


    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        dispatch(operations.register(values));
        setLoading(true);
        resetForm();
    };

    const renderError = message => Notify.info(`${message}`);

    return (
        <Box>
            {loading && 
            <>
                <h3>Please wait</h3>
                <Loader/>
            </>}
            {!loading && 
            <>
            <FormTitle>Please register to use the Delivery service</FormTitle>
            
            <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchemaRegister}
            >
            <RegisterForm autoComplete="off">
                    <LableForm htmlFor="name">
                    Name
                        <InputForm type="text"
                            name="name"
                            placeholder="Arnold Steel"
                        />
                    </LableForm>
                    <ErrorMessage name="name" render={renderError} />

                    <LableForm htmlFor="email">
                    Email
                        <InputForm
                            type="email"
                            name="email"
                            placeholder="Example@gmail.com"        
                        />
                    </LableForm>
                    <ErrorMessage name="email" render={renderError} />

                    <LableForm htmlFor="phone">
                    Phone
                        <InputForm
                            type="phone"
                            name="phone"
                            placeholder="+380*********"        
                        />
                    </LableForm>
                    <ErrorMessage name="phone" render={renderError} />

                    <LableForm htmlFor="password">
                    Password
                        <InputForm
                            type="password"
                            name="password"
                            placeholder="Min 8 characters"
                        />
                    </LableForm>
                    <ErrorMessage name="password" render={renderError} />

                    <LableForm htmlFor="repeat_password">
                    Repeat password
                        <InputForm
                            type="password"
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
            </>
            }

        </Box>
    );
};