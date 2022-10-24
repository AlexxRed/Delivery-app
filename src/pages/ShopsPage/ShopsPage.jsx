import { Box } from './ShopsPage.styled';
import ShopsList from '../../components/ShopsList/ShopsList';
import ShopCart from '../../components/ShopCart/ShopCard'
import Footer from '../../components/Footer/Footer';

function ShopsPage() {
    return (
        <>
            <Box>
                <ShopsList />
                <ShopCart />
            </Box>
            <Footer/>
        </>       
    )
};

export default ShopsPage;