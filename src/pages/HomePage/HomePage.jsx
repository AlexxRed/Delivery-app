import { Box } from './HomePage.styled'

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
            <h1>Home page</h1>
        </Box>
    )
};

export default HomePage;