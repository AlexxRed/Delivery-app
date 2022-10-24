import {
    List,
    Item,
    MeatAvatar,
    JapanAvatar,
    SaladderAvatar,
    BurgerAvatar,
    BakeryAvatar,
    PizzaAvatar,
    ShopName,
    Wrapper
} from './OurPartners.styled';

import meat from '../../images/main/steak-g978b0b3c2_640.jpg';
import fish from '../../images/main/sushi-gb2b7fadaa_640.jpg';
import salad from '../../images/main/tomato-mozzarella-gcc15d168c_640.jpg';
import burger from '../../images/main/burger-g176b30e6d_640.jpg';
import bakery from '../../images/main/bread-gdd57bf827_640.jpg';
import pizza from '../../images/main/pizza-gca6fed646_640.jpg';


export default function OurPartners() {
    return (
        <List>
            <Item>
                <Wrapper>
                    <img src={pizza} alt="Pizza Party" height={150} width={220} />
                    <PizzaAvatar />
                    <ShopName>Pizza Party</ShopName>    
                </Wrapper>
            </Item>
            <Item>
                <Wrapper>
                    <img src={meat} alt="Only Meat" height={150} width={220} />
                    <MeatAvatar />
                    <ShopName>Only Meat</ShopName>
                </Wrapper>

            </Item>
            <Item>
                <Wrapper>
                    <img src={fish} alt="JapanCO" height={150} width={220} />
                    <JapanAvatar />
                    <ShopName>JapanCO</ShopName>
                </Wrapper>
            </Item>
            <Item>
                <Wrapper>
                    <img src={salad} alt="Saladder" height={150} width={220} />
                    <SaladderAvatar/>
                    <ShopName>Saladder</ShopName>
                </Wrapper>
            </Item>
            <Item>
                <Wrapper>
                    <img src={burger} alt="Burger House" height={150} width={220} />
                    <BurgerAvatar/>
                    <ShopName>Burger House</ShopName>
                </Wrapper>                
            </Item>
            <Item>
                <Wrapper>
                    <img src={bakery} alt="Bakery Place" height={150} width={220} />
                    <BakeryAvatar/>
                    <ShopName>Bakery Place</ShopName>
                </Wrapper>
            </Item>
        </List>
    )
}