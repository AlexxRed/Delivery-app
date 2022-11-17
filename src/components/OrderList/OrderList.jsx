import { useSelector, useDispatch } from 'react-redux';
import {
    List,
    ListItem,
    OrderImage,
    OrderBox,
    OrderText,
    ButtonDelete,
    ButtonAdd,
    ButtonDecrease,
    Wrapper,
    ShopsLink
} from './OrderList.styled';
import { getOrder, removeOrder, increaseQuantity, decreaseQuantity} from '../../redux/orderSlice';


export default function OrderList() {
    const dispatch = useDispatch();
    const availableOrdes = useSelector(getOrder);

    const totalPrice = availableOrdes.reduce((previousValue, element) => {
        return previousValue + element.price * element.quantity;
    }, 0);

    return (
        <>
            <List>
                {availableOrdes.length === 0 && <ShopsLink to="/shops">Choose what you want to order - here</ShopsLink>}  
                {availableOrdes.length !== 0 && <OrderText>Your order:</OrderText>}
                {availableOrdes.length !== 0 && availableOrdes.map((item) => (
                        <ListItem key={item.name} >                  
                            <OrderBox>
                                <OrderImage src={item.image} alt={item.name} width="100" height="60" />
                                <OrderText>{item.name}</OrderText>
                                <OrderText>$ {item.price}</OrderText>
                                <Wrapper>
                                    <ButtonAdd onClick={() => dispatch(increaseQuantity(item.name))}>+</ButtonAdd>
                                    <OrderText>{item.quantity}</OrderText>
                                    <ButtonDecrease onClick={() => dispatch(decreaseQuantity(item.name))}>-</ButtonDecrease>
                                    <ButtonDelete onClick={() => dispatch(removeOrder(item.name))}>delete</ButtonDelete>
                                </Wrapper>
                                
                            </OrderBox>                    
                        </ListItem>
                )
                )}
                {availableOrdes.length !== 0 && <OrderText style={{ color: '#4ff339f6'}}>Total price ${totalPrice}</OrderText>}
            </List>
        </>
    )
};