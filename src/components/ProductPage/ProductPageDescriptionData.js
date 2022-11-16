import {useSelector} from "react-redux";

const ProductPageDescriptionData = () => {
    const filteredItemData = useSelector(state => {
        const {unloadDataReducer} = state;
        return unloadDataReducer[0];
    });
    const description = filteredItemData.description;
    const descriptionData = () => {
        const descriptionLowCase = description.toLowerCase().split('.')
        const capitalizeWords = (descriptionLowCase) => {
            return descriptionLowCase.map(element => {
                return ((element.replace(/^ +| +$|( ) +/g, "$1")).charAt(0).toUpperCase() + (element.replace(/^ +| +$|( ) +/g, "$1")).substring(1).toLowerCase());
            });
        }
        return capitalizeWords(descriptionLowCase).join('. ')
    }
    return {
        descriptionData
    }
}

export default ProductPageDescriptionData;