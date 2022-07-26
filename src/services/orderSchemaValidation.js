import * as yup from 'yup';

const orderSchemaValidation = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    name: yup
        .string()
        .matches(
            /^[A-Z][a-z]*(\s[A-Z][a-z]*)+$|^[А-Я][а-я]*(\s[А-я][а-я]*)+$/gms,
            'Please enter your full name as in example: John Doue',
        )
        .required('Full name is required'),
    phoneNumber: yup
        .string()
        .matches(
            /^(?:\+38)?(0\d{9})$/,
            'Please enter your phone number as in example: +38XXXXXXXXX',
        )
        .required('Phone number is required'),
    address: yup
        .string()
        .min(5, 'Address should be of minimum 8 characters length')
        .required('Address is required'),
});

export default orderSchemaValidation;