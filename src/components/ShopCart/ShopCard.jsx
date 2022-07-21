import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getShops } from '../../redux/shopsSlice';
import { fetchAllShops } from '../../redux/shopsOperations';
import { getActiveShop } from '../../redux/shopsSlice';
import { List, ListItem, CardPhoto, CardName } from './ShopCard.styled';


export default function ShopsCart() {
    const dispatch = useDispatch();
    const availableShops = useSelector(getShops);
    const activeShop = useSelector(getActiveShop)
    console.log(activeShop);

        useEffect(() => {
        dispatch(fetchAllShops())
    }, [dispatch])

    const findShop = availableShops.find(({ shop }) => shop === activeShop)
    console.log(findShop);

    return (
        <List>
            {findShop && findShop.products.map(({name, price, image}) => (
                <ListItem key={name}>
                    <CardPhoto src={image} alt={name} />
                    <CardName>{name}</CardName>
                    <p>$ {price}</p>
                    <button>Add to cart</button>
                </ListItem>
            ))}   
        </List>    
    )
};