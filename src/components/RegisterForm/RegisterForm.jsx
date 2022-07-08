// import { useState } from 'react';
import { LableForm, Box, RegisterForm, FormTitle, InputForm, FormButton, Text } from "./RegisterForm.styled";
import { Formik, ErrorMessage } from 'formik';
import validationSchemaRegister from '../../services/validationSchemaRegister';
import { Link } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { useDispatch } from 'react-redux';
// import  operations  from '../../redux/auth/authOperations';



export default function RegisterPage() {
    // const dispatch = useDispatch();
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };


    const handleSubmit = (values, { resetForm }) => {
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

                    <LableForm htmlFor="password">
                    Password
                        <InputForm
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                    </LableForm>
                    <ErrorMessage name="password" render={renderError} />

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