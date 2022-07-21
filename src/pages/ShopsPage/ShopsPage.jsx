import { Box } from './ShopsPage.styled';
import ShopsList from '../../components/ShopsList/ShopsList';
import ShopCart from '../../components/ShopCart/ShopCart'

function ShopsPage() {
    return (
        <Box>
            <ShopsList />
            <ShopCart />
        </Box>
        
    )
};

export default ShopsPage;