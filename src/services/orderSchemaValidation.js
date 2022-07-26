import * as yup from 'yup';

const orderSchemaValidation = yup.object({
    name: yup
        .string()
        .required('Full name is required'),
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    phone: yup
        .string()
        .required('Phone number is required'),
    address: yup
        .string()
        .min(5, 'Address should be of minimum 5 characters length')
        .required('Address is required'),
});

export default orderSchemaValidation;