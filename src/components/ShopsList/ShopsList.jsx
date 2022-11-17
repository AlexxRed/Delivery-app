// import { NavLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import { List, ListItem, ShopAvatar, ShopBox, ShopName, ListButton } from './ShopsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getShops, setShop } from '../../redux/shopsSlice';
import { fetchAllShops } from '../../redux/shopsOperations';


export default function ShopsList() {
    const dispatch = useDispatch();
    const availableShops = useSelector(getShops);
    
    useEffect(() => {
        dispatch(fetchAllShops())
    }, [dispatch])

    return (
        <List>
            {availableShops.map((item) => (
                <ListButton key={item._id}>
                    <ListItem onClick={() => dispatch(setShop(item.shop))}>                    
                        <ShopBox>
                            <ShopAvatar />
                            <ShopName>{item.shop}</ShopName>
                        </ShopBox>                    
                    </ListItem>
                </ListButton>
            )
            )}
        </List>
    )
};





