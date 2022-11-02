import { Box, Hero, ShopsLink } from "./Hero.styled";

export default function HeroSection(){
    return (
        <Box>
            <Hero>Place an order and get it delivered to your home. We all know that the best restaurant is at home.</Hero>
            <ShopsLink to="/shops">
                Go to your favorite dishes...
            </ShopsLink>
        </Box>

        
    )
}