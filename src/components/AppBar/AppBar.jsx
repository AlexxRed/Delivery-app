import { Link, Header, Navigation, Box, Logo, Basket, BasketText, Wrapper, Text} from './AppBar.styled';//Logo,LogoIcon 
import { NavLink } from 'react-router-dom';
import { refs } from '../../services/refs';
import { useSelector } from 'react-redux';
import {getOrder}from '../../redux/orderSlice'
import authSelectors from '../../redux/auth/authSelectors'


export function AppBar() {
    const userName = useSelector(authSelectors.getUserName)
    const order = useSelector(getOrder)

    return (
        <Header>
            <Navigation>
                <Box>
                    <NavLink to={refs.layout}><Logo></Logo></NavLink>
                    <Link to={refs.shopsPage}>Shops</Link>
                    <Link to={refs.shoppingCartPage}>Shopping Cart</Link>
                    <NavLink to={refs.shoppingCartPage}>
                        <Wrapper>
                            <Basket></Basket>
                            {order.length !== 0 && <BasketText>{order.length }</BasketText>}
                    </Wrapper>
                    </NavLink>
                </Box>
                <Text>{userName}</Text>
            </Navigation>
        </Header>
        
    )
};

                /* {isLoggedIn ?
                    <Box>
                </Box>
                        :
                <Box>
                    <Link to={refs.loginPage}>Login</Link>
                    <Link to={refs.registerPage}>Registration</Link>
                </Box>
                    
                } */