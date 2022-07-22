import { Box, Wrapper } from './ShoppingCartPage.sryled';
import UserData from '../../components/UserData/UserData';
import OrderList from '../../components/OrderList/OrderList'
import GoogleMap from '../../components/GoogleMap/GoogleMap';

function ShoppingCartPage() {
    return (
        <Box>
            <OrderList />
            <Wrapper>
                <UserData />
                <GoogleMap/>
            </Wrapper>
        </Box>
        
    )
};

export default ShoppingCartPage;