import {Container} from "../components/StyledComponents/General";
import {goToShopInstagramText, sectionSaleTitleTextPartOne, shopInstagramText} from "../configs/stringsDataConfig";
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
} from "../components/StyledComponents/styledInstagramShop";



const ShopInstagram = () => {
    return (
        <Container>
            <ShopInstagramWrapper>
                <ShopInstagramHeader>
                    <p>{shopInstagramText}</p>
                    <p>{goToShopInstagramText}</p>
                    <ShopInstagramArrow>
                        <use href="#arrowInstagramShop"></use>
                    </ShopInstagramArrow>
                </ShopInstagramHeader>
                <ShopInstagramBody>
                    <ShopInstagramLeftScreen>
                        <img src={LeftScreenImg} alt="Img"/>
                    </ShopInstagramLeftScreen>
                    <ShopInstagramRightScreen>
                        <img src={RightScreenImgFirst} alt="Img"/>
                        <img src={RightScreenImgSecond} alt="Img"/>
                        <img src={RightScreenImgThird} alt="Img"/>
                        <img src={RightScreenImgFourth} alt="Img"/>
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