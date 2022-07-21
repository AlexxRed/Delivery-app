import { useSelector } from 'react-redux';
import { List, ListItem, OrderImage, OrderBox, OrderText, ListButton } from './OrderList.styled';
import { getOrder} from '../../redux/orderSlice';


export default function OrderList() {
    // const dispatch = useDispatch();
    const availableOrdes  = useSelector(getOrder);
    
    const totalPrice = availableOrdes.reduce((previousValue, element) => {
        return previousValue + element.price;
    }, 0)



    return (
        <List>
            {/* {isLoading && <Loader/>} */}
            {<OrderText>Your order:</OrderText>}
            {availableOrdes.length === 0 && <h3>Add products :(</h3>}  
            {availableOrdes.map((item) => (
                    <ListItem key={item.name} onClick={() => console.log('add')}>                    
                        <OrderBox>
                            <OrderImage src={item.image} alt={item.name} width="100" height="60" />
                            <OrderText>{item.name}</OrderText>
                            <OrderText>$ {item.price}</OrderText>
                            <ListButton>+</ListButton>
                            <ListButton>-</ListButton>
                        </OrderBox>                    
                    </ListItem>
            )
            )}
            {<OrderText>Total price ${totalPrice}</OrderText>}
        </List>

    )
};