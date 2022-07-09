import { Box, Text } from './HomePage.styled'
import { Link } from "react-router-dom";


function HomePage() {
    // const isLogin = useSelector(authSelectors.getIsLoggedIn);
    // const isLogin = true;
    return (
        <Box>
            {/* {isLogin ? <UserLoggedInTitle>Welcome, you are logged in with your account.
                Thank you for using our application.
                <Link to={refs.contactsPage}>Here are your contacts</Link>
            </UserLoggedInTitle>
                :
            <>
                <Greetings />
                <Link to={refs.loginPage}>Please go to Login</Link>
                <p>If you don't have an account</p>
                <Link to={refs.registerPage}>Please go to Register</Link>
            </>
            } */}
            <Text>Place an order and get it delivered to your home. We all know that the best restaurant is at home.
                <Link to="/shops"
                    style={{ textDecoration: "none", fontSize: 18, color: "#2fa08dc3" }}>
                    Go to your favorite dishes...
                </Link>
            </Text>
        </Box>
    )
};

export default HomePage;