import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getShops } from '../../redux/shopsSlice';
import { fetchAllShops } from '../../redux/shopsOperations';
import { getActiveShop } from '../../redux/shopsSlice';


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
        <ul>
            {findShop && findShop.products.map(({name, price, image}) => (
                <li key={name}>
                    <img src={image} alt={name} />
                    <h3>{name}</h3>
                    <p>{price}</p>
                    <button>add</button>
                </li>
            ))}   
        </ul>    
    )
};