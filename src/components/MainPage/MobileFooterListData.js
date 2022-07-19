import {useState} from "react";

const MobileFooterListData = () => {
    const [isActiveFirstFooterCollapse, setIsActiveFirstFooterCollapse] = useState(false);
    const [isActiveSecondFooterCollapse, setIsActiveSecondFooterCollapse] = useState(false);
    const [isActiveThirdFooterCollapse, setIsActiveThirdFooterCollapse] = useState(false);
    const [isActiveFourthFooterCollapse, setIsActiveFourthFooterCollapse] = useState(false);

    const handleClickFirstFooterCollapse = () => {
        if (isActiveSecondFooterCollapse === true) {
            setIsActiveSecondFooterCollapse(false)
        } else if (isActiveThirdFooterCollapse === true) {
            setIsActiveThirdFooterCollapse(false)
        } else if (isActiveFourthFooterCollapse === true) {
            setIsActiveFourthFooterCollapse(false)
        }
        setIsActiveFirstFooterCollapse(!isActiveFirstFooterCollapse)
    }

    const handleClickSecondFooterCollapse = () => {
        if (isActiveFirstFooterCollapse === true) {
            setIsActiveFirstFooterCollapse(false)
        } else if (isActiveThirdFooterCollapse === true) {
            setIsActiveThirdFooterCollapse(false)
        } else if (isActiveFourthFooterCollapse === true) {
            setIsActiveFourthFooterCollapse(false)
        }
        setIsActiveSecondFooterCollapse(!isActiveSecondFooterCollapse)
    }

    const handleClickThirdFooterCollapse = () => {
        if (isActiveFirstFooterCollapse === true) {
            setIsActiveFirstFooterCollapse(false)
        } else if (isActiveSecondFooterCollapse === true) {
            setIsActiveSecondFooterCollapse(false)
        } else if (isActiveFourthFooterCollapse === true) {
            setIsActiveFourthFooterCollapse(false)
        }
        setIsActiveThirdFooterCollapse(!isActiveThirdFooterCollapse)
    }
    const handleClickFourthFooterCollapse = () => {
        if (isActiveFirstFooterCollapse === true) {
            setIsActiveFirstFooterCollapse(false)
        } else if (isActiveSecondFooterCollapse === true) {
            setIsActiveSecondFooterCollapse(false)
        } else if (isActiveThirdFooterCollapse === true) {
            setIsActiveThirdFooterCollapse(false)
        }
        setIsActiveFourthFooterCollapse(!isActiveFourthFooterCollapse)
    }
    return {
        isActiveFirstFooterCollapse,
        isActiveSecondFooterCollapse,
        isActiveThirdFooterCollapse,
        isActiveFourthFooterCollapse,
        handleClickFirstFooterCollapse,
        handleClickSecondFooterCollapse,
        handleClickThirdFooterCollapse,
        handleClickFourthFooterCollapse,
    }
}

export default MobileFooterListData;