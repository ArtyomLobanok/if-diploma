import {useSelector} from "react-redux";
import {useState} from "react";


const ProductPageSizeData = () => {
    const filteredItemData = useSelector(state => {
        const {unloadDataReducer} = state;
        return unloadDataReducer[0];
    });

    const SizesArray = filteredItemData.availableSizes[0].split(',');

    const [isValueBtn, setIsValueBtn] = useState('');
    const handleSelectedSizeXS = () => {
        setIsValueBtn(SizesArray[0])
    }
    const handleSelectedSizeS = () => {
        setIsValueBtn(SizesArray[1])
    }
    const handleSelectedSizeM = () => {
        setIsValueBtn(SizesArray[2])
    }
    const handleSelectedSizeL = () => {
        setIsValueBtn(SizesArray[3])
    }
    const handleSelectedSizeXL = () => {
        setIsValueBtn(SizesArray[4])
    }
    const handleSelectedSizeXXL = () => {
        setIsValueBtn(SizesArray[5])
    }
    return {
        isValueBtn,
        handleSelectedSizeXS,
        handleSelectedSizeS,
        handleSelectedSizeM,
        handleSelectedSizeL,
        handleSelectedSizeXL,
        handleSelectedSizeXXL,
        SizesArray,
    }
}
export default ProductPageSizeData;