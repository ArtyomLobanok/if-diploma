import useCatalogFetch from "../hooks/use-catalogFetch";
import {SliderArrow, SliderButtonNext, SliderButtonPrev, SliderWrapper} from "./Styled-Components/styledSaleSection";
import CardOfSale from "./CardOfSale";
import Slider from "react-slick";
import {useDispatch} from "react-redux";
import {productLoad} from "../redux/actions";



const SaleSlider = () => {
    const {catalogArray} = useCatalogFetch();
    const dispatch = useDispatch();
    const handleSetId = (e) => {
        window.scrollTo(0, 0)
        console.log(e.target.id)
        dispatch(productLoad(e.target.id))
    }
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
            <Slider {...settings}>
                {catalogArray.map(saleCard => (
                    <CardOfSale handleSetId={handleSetId} key={saleCard.id} card={saleCard}/>
                ))}
            </Slider>
        </SliderWrapper>
    );
}

export default SaleSlider;