import { Box,TitleName } from './HomePage.styled'
import HeroSection from '../../components/Hero/Hero'
import OurPartners from '../../components/OurPartners/OurPartners';
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer';

function HomePage() {
    // const isLogin = useSelector(authSelectors.getIsLoggedIn);
    // const isLogin = true;
    return (
        <Box>
            <HeroSection/>
            <TitleName>Our partners</TitleName>
            <OurPartners />
            <TitleName>About Us</TitleName>
            <About />
            <Footer/>
        </Box>
    )
};

export default HomePage;