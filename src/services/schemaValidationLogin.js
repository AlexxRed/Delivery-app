import * as yup from 'yup';

const validationSchemaLogin = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
});

export default validationSchemaLogin;

