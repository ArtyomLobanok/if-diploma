import {Container} from "../components/Styled-Components/General";
import {goToShopInstagramText, sectionSaleTitleTextPartOne, shopInstagramText} from "../configs/stringsData";
import LeftScreenImg from "../../src/assets/img/LeftScreenImg.png"
import RightScreenImgFirst from "../assets/img/RightScreenImgFirst.png"
import RightScreenImgSecond from "../assets/img/RightScreenImgSecond.png"
import RightScreenImgThird from "../assets/img/RightScreenImgThird.png"
import RightScreenImgFourth from "../assets/img/RightScreenImgFourth.png"
import {
    ShopInstagramArrow,
    ShopInstagramBody,
    ShopInstagramFooter,
    ShopInstagramHeader,
    ShopInstagramLeftScreen,
    ShopInstagramRightScreen,
    ShopInstagramWrapper,
} from "../components/Styled-Components/styledInstagramShop";



const ShopInstagram = () => {
    return (
        <Container>
            <ShopInstagramWrapper>
                <ShopInstagramHeader>
                    <a href="#">{shopInstagramText}</a>
                    <a href="#">{goToShopInstagramText}</a>
                    <ShopInstagramArrow>
                        <use href="#arrowInstagramShop"></use>
                    </ShopInstagramArrow>
                </ShopInstagramHeader>
                <ShopInstagramBody>
                    <ShopInstagramLeftScreen>
                        <img src={LeftScreenImg} alt="Image"/>
                    </ShopInstagramLeftScreen>
                    <ShopInstagramRightScreen>
                        <img src={RightScreenImgFirst} alt="Image"/>
                        <img src={RightScreenImgSecond} alt="Image"/>
                        <img src={RightScreenImgThird} alt="Image"/>
                        <img src={RightScreenImgFourth} alt="Image"/>
                    </ShopInstagramRightScreen>
                </ShopInstagramBody>
                <ShopInstagramFooter>
                    <span>{sectionSaleTitleTextPartOne}</span>
                </ShopInstagramFooter>
            </ShopInstagramWrapper>
        </Container>
    )
}

export default ShopInstagram;