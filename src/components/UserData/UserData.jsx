import { LableForm, Box, RegisterForm, FormTitle, InputForm, FormButton, Text } from "./UserData.styled";
import { Formik, ErrorMessage } from 'formik';
import validationSchemaRegister from '../../services/validationSchemaRegister';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getOrder } from '../../redux/orderSlice';
import { useSelector } from 'react-redux';

// import { useDispatch } from 'react-redux';
// import  operations  from '../../redux/auth/authOperations';



export default function RegisterPage() {
    // const dispatch = useDispatch();
    const availableOrdes = useSelector(getOrder);

    const totalPrice = availableOrdes.reduce((previousValue, element) => {
        return previousValue + element.price * element.quantity;
    }, 0);

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        address: '',
    };


    // const handleSubmit = (values, { resetForm }) => {
    //     dispatch(operations.register(values));
    //     console.log(values);
    //     resetForm();
    // };

    const renderError = message => Notify.info(`${message}`);

    return (
        <Box>
            <FormTitle>Delivery information: </FormTitle>
            
            <Formik
                initialValues={initialValues}
                onSubmit={console.log("handleSubmit")}
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

                    <LableForm htmlFor="address">
                    Address
                        <InputForm
                            type="address"
                            name="address"
                            placeholder="Address"
                        />
                    </LableForm>
                    <ErrorMessage name="password" render={renderError} />

                    <Text>Total Price ${totalPrice}</Text>
                    
                    <FormButton type="submit">Confirm order</FormButton>
                </RegisterForm>
            </Formik>
        </Box>
    );
};