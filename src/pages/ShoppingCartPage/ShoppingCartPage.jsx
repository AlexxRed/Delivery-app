import { Box } from './ShoppingCartPage.sryled';
import UserData from '../../components/UserData/UserData';
import OrderList from '../../components/OrderList/OrderList'

function ShoppingCartPage() {
    return (
        <Box>
            <OrderList />
            <UserData />
        </Box>
        
    )
};

export default ShoppingCartPage;