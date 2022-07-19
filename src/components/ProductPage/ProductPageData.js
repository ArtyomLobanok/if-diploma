import {useState} from "react";

const ProductPageData = () => {
    const [isActiveFirstCollapse, setIsActiveFirstCollapse] = useState(false);
    const [isActiveSecondCollapse, setIsActiveSecondCollapse] = useState(false);
    const [isActiveThirdCollapse, setIsActiveThirdCollapse] = useState(false);
    const handleClickFirstCollapse = () => {
        if (isActiveSecondCollapse === true) {
            setIsActiveSecondCollapse(false)
        } else if (isActiveThirdCollapse === true) {
            setIsActiveThirdCollapse(false)
        }
        setIsActiveFirstCollapse(!isActiveFirstCollapse)
    }
    const handleClickSecondCollapse = () => {
        if (isActiveFirstCollapse === true) {
            setIsActiveFirstCollapse(false)
        } else if (isActiveThirdCollapse === true) {
            setIsActiveThirdCollapse(false)
        }
        setIsActiveSecondCollapse(!isActiveSecondCollapse)
    }
    const handleClickThirdCollapse = () => {
        if (isActiveFirstCollapse === true) {
            setIsActiveFirstCollapse(false)
        } else if (isActiveSecondCollapse === true) {
            setIsActiveSecondCollapse(false)
        }
        setIsActiveThirdCollapse(!isActiveThirdCollapse)
    }
    return {
        isActiveFirstCollapse,
        isActiveSecondCollapse,
        isActiveThirdCollapse,
        handleClickFirstCollapse,
        handleClickSecondCollapse,
        handleClickThirdCollapse,
    }
}

export default ProductPageData;