import { Link, Header, Navigation, Box, Logo} from './AppBar.styled';//Logo,LogoIcon 
import { NavLink } from 'react-router-dom';
import { refs } from '../../services/refs';
import UserMenu from '../UserMenu/UserMenu';
// import { useSelector } from 'react-redux';
// import authSelectors from '../../redux/auth/authSelectors'


export function AppBar() {
    // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    const isLoggedIn = true

    return (
        <Header>
            <Navigation>
                <Box>
                    <NavLink to={refs.layout}><Logo></Logo></NavLink>
                    <Link to={refs.shopsPage}>Shops</Link>
                    <Link to={refs.shoppingCartPage}>Shopping Cart</Link>
                </Box>
                {isLoggedIn ?
                    <Box>
                    <UserMenu></UserMenu>
                </Box>
                        :
                <Box>
                    <Link to={refs.loginPage}>Login</Link>
                    <Link to={refs.registerPage}>Registration</Link>
                </Box>
                    
                }
                
            </Navigation>
        </Header>
        
    )
};