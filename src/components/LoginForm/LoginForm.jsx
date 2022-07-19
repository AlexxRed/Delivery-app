import { Formik, ErrorMessage } from 'formik';
import { Link } from "react-router-dom";
import { LableForm, Box, LogForm, FormTitle, InputForm, FormButton, Text } from "./LoginForm.styled";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import  validationSchemaLogin  from "../../services/schemaValidationLogin";
import { useDispatch } from 'react-redux';
import  operations  from '../../redux/auth/authOperations';



export default function LoginForm() {
    const dispatch = useDispatch();


    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        dispatch(operations.logIn(values));
        resetForm();
    };


    const renderError = message => Notify.info(`${message}`);

    return (
        <Box>
            <FormTitle>Please enter your name and password</FormTitle>

            <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchemaLogin}
            >
            <LogForm autoComplete="off">
                <LableForm htmlFor="email">Email
                    <InputForm
                            name="email"
                            type="email"
                            placeholder="Your email" />
                </LableForm>
                    <ErrorMessage name="name" render={renderError} />
                <LableForm htmlFor="password">Number
                        <InputForm
                            aria-invalid="false"
                            name="password"
                            type="password"
                            placeholder="Password" />
                </LableForm>
                    <ErrorMessage name="password" render={renderError} />
                        
                <FormButton type="submit">Login</FormButton>
            </LogForm>
            </Formik>
                
            <Text>Don’t have an account?</Text>
            <Text>
                <Link to="/register"
                    style={{ textDecoration: "none", fontSize: 18, color: "#b027da" }}>
                    Register
                </Link>
            </Text>
        </Box>
    );
};