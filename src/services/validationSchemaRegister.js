import * as yup from 'yup';

const validationSchemaRegister = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
});

export default validationSchemaRegister;
