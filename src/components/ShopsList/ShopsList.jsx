// import { NavLink } from 'react-router-dom';
import { List, ListItem, ShopAvatar, ShopBox, ShopName } from './ShopsList.styled';

const availableShops = ['Burger House','Saladder','JapanCO','Bakery Place','Pizza Party','Only Meat']

const ShopsList = () => {
    // const isLoading = false;
    return (
        <List>
            {/* {isLoading && <Loader/>} */}
            {availableShops.length === 0 && <h3>...oops something went wrong :(</h3>}  
            {availableShops.map((item) => (
                <ListItem key={item}>
                    <ShopBox>
                        <ShopAvatar />
                        <ShopName>{item}</ShopName>
                    </ShopBox>
                </ListItem>
            )
            )}
        </List>

    )
};

export default ShopsList;

// <ul className={css.companylist}>
//             <li className={css.companylist_item}>
//             <NavLink className={css.companylist_link} to={'macdonny'}>
//                 Mac
//             </NavLink>
//             </li>
//             <li className={css.companylist_item}>
//             <NavLink className={css.companylist_link} to={'kfs'}>
//                 KFc
//             </NavLink>
//             </li>
//             <li className={css.companylist_item}>
//             <NavLink className={css.companylist_link} to={'pizzaday'}>
//                 Pizza
//             </NavLink>
//             </li>
//             <li className={css.companylist_item}>
//             <NavLink className={css.companylist_link} to={'gastrocafe'}>
//                 Sal
//             </NavLink>
//             </li>
//         </ul>