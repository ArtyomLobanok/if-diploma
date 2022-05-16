import HotelCard from "../HotelCard/HotelCard";
import useFetch from "../../hooks/useFetch"


const SaleSlider = () => {
    const {array} = useFetch();

    return (
        <SliderWrapper>
            <Slider {...settings}>
                {array.map(hotelCard => (
                    <HotelCard key={hotelCard.id} card={hotelCard}/>
                ))}
            </Slider>
        </SliderWrapper>
    );
}

export default SaleSlider;