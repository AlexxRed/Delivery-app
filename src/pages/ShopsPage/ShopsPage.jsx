import { useSelector } from 'react-redux'
import { Box } from './ShopsPage.styled';
import ShopsList from '../../components/ShopsList/ShopsList';
import ShopCart from '../../components/ShopCart/ShopCard'
import Footer from '../../components/Footer/Footer';
import { getShops } from '../../redux/shopsSlice';
import { Loader } from '../../components/Loader/Loader';

function ShopsPage() {
    const availableShops = useSelector(getShops);

    return (
        <>
            <Box>
                {availableShops.length === 0 ?? <Loader/> }  
                <ShopsList />
                <ShopCart />
            </Box>
            <Footer/>
        </>       
    )
};

export default ShopsPage;