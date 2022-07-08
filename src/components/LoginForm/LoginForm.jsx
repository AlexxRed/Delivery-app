import { Link } from "react-router-dom";
import { useState } from 'react';
import { LableForm, Box, Form, FormTitle, InputForm, FormButton, Text  } from "./LoginForm.styled";

// import { useDispatch } from 'react-redux';
// import  operations  from '../../redux/auth/authOperations';



export default function LoginForm() {
    // const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
        case 'email':
            return setEmail(value);
        case 'password':
            return setPassword(value);
        default:
            return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        // dispatch(operations.logIn({ email, password }));
        console.log( email, password);
        setEmail('');
        setPassword('');
    };

    return (
        <Box>
        <FormTitle>Please enter your name and password</FormTitle>

        <Form onSubmit={handleSubmit}  autoComplete="off">
            <LableForm >
            Email
            <InputForm
                type="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={handleChange}
            />
            </LableForm>

            <LableForm >
            Password
                <InputForm
                aria-invalid="false"        
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
            />
            </LableForm>

            <FormButton type="submit">Login</FormButton>
        </Form>
            <Text>Don’t have an account?</Text>
            <Text><Link to="/register" style={{textDecoration:"none",fontSize:18, color: "#b027da"}}>Register</Link></Text>
        </Box>
    );
}