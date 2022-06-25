import {useState} from "react"

export const DropdownNavList = () => {
    const [isDropdown, setDropdown] = useState(false);
    console.log(isDropdown)
    const handleClickDropdownList = () => {
        setDropdown(!isDropdown)
    }

    const handleClickCloseList = () => {
        setDropdown(false)
    }
    return (
        {
            isDropdown,
            handleClickDropdownList,
            handleClickCloseList,
        }
    )
};
