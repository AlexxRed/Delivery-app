import { LableForm, Box, RegisterForm, FormTitle, InputForm, FormButton, Text } from "./UserData.styled";
import { Formik, ErrorMessage } from 'formik';
import orderSchemaValidation from '../../services/orderSchemaValidation';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getOrder } from '../../redux/orderSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { refs } from '../../services/refs';
// import { useDispatch } from 'react-redux';




export default function RegisterPage() {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
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


    const handleSubmit = (values, { resetForm }) => {
        // dispatch(operations.register(values));
        if (values.name === '') {
            Notify.info('Add your name')
        }
        console.log(values);
        navigate(`/${refs.onDelivery}`)
        resetForm();
    };

    const renderError = message => Notify.info(`${message}`);

    return (
        <Box>
            <FormTitle>Delivery information: </FormTitle>
            
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={orderSchemaValidation}
            >
                <RegisterForm autoComplete="on">
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

                    <LableForm htmlFor="address">
                    Address
                        <InputForm
                            type="address"
                            name="address"
                            placeholder="Myrna Str. 110/10"
                        />
                    </LableForm>
                    <ErrorMessage name="password" render={renderError} />
                    <FormButton type="submit">Confirm order</FormButton>
                </RegisterForm>
            </Formik>
            <Text>Total Price ${totalPrice}</Text>
        </Box>
    );
};