import useCatalogFetch from "../../hooks/use-catalogFetch";
import {
    SliderArrow,
    SliderButtonNext,
    SliderButtonPrev,
    SliderSpinner,
    SliderWrapper
} from "../Styled-Components/styledSaleSection";
import CardOfSale from "./CardOfSale";
import Slider from "react-slick";
import {ThreeCircles} from 'react-loader-spinner'

const SaleSlider = () => {
    const {catalogArray, isLoaded} = useCatalogFetch();
    const SampleNextArrow = ({className, onClick}) => {
        return (
            <div
                className={className}
                onClick={onClick}
            >
                <div>
                    <SliderButtonNext>
                        <SliderArrow>
                            <use href="#Arrow"></use>
                        </SliderArrow>
                    </SliderButtonNext>
                </div>
            </div>
        );
    }
    const SamplePrevArrow = ({className, onClick}) => {
        return (
            <div
                className={className}
                onClick={onClick}
            >
                <div>
                    <SliderButtonPrev>
                        <SliderArrow>
                            <use href="#Arrow"></use>
                        </SliderArrow>
                    </SliderButtonPrev>
                </div>
            </div>
        );
    }
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    }
    return (
        <SliderWrapper>
            {
                isLoaded ?
                    <Slider {...settings}>
                        {
                            catalogArray.map(saleCard => (
                                <CardOfSale
                                    key={saleCard.id}
                                    card={saleCard}/>))
                        }
                    </Slider>
                    :
                    <SliderSpinner>
                        <ThreeCircles
                            height="100"
                            width="100"
                            color='#000F08'
                            ariaLabel='loading'
                        />
                    </SliderSpinner>
            }
        </SliderWrapper>
    );
}

export default SaleSlider;