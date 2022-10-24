import { Hero } from "./Hero.styled";
import { Link } from "react-router-dom";

export default function HeroSection(){
    return (
            <Hero>Place an order and get it delivered to your home. We all know that the best restaurant is at home.
                <Link to="/shops"
                    style={{ textDecoration: "none", fontSize: 18, color: "#2fa08dc3" }}>
                    Go to your favorite dishes...
                </Link>
            </Hero>
    )
}