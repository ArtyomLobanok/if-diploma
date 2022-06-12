import {
    CATALOG_DATA_LOAD,
    CURRENT_PAGE_TO_SHOW,
    SEARCH_DATA, SEARCH_INPUT_TEXT, SHOW_SEARCH, SHOW_SEARCH_RESULT,
    SHOW_SECTION_CATEGORY,UNLOADING_DATA,
} from "./types";
import {catalogUrl} from "../configs/urlConfig";


export const catalogLoad = (params) => {
    return async dispatch => {
        const response = await fetch(`${catalogUrl}`);
        const jsonData = await response.json();
        const filteredDate = jsonData.filter((el) => (el.type).toLowerCase().includes(params.toLowerCase()))
        dispatch({
            type: CATALOG_DATA_LOAD,
            data: filteredDate
        });
    };
};

export const inputSearchDataLoad = (textInput) => {
    return async dispatch => {
        const response = await fetch(`${catalogUrl}`);
        const jsonData = await response.json();
        const filteredDate = jsonData.filter((el) => (el.name).toLowerCase().includes(textInput.toLowerCase()) ||
            (el.type).toLowerCase().includes(textInput.toLowerCase()))
        dispatch({
            type: SEARCH_DATA,
            data: filteredDate
        });
    };
};

export const unloadData = (params) => {
    return async dispatch => {
        const response = await fetch(`${catalogUrl}`);
        const jsonData = await response.json();
        const filteredDataPage = await jsonData.filter((el) => el.id === params)
        dispatch({
            type: UNLOADING_DATA,
            data: filteredDataPage
        });
    };
};

// export const basket = (arrayIzKorzyny) => {
//     return async dispatch => {
//         const response = await fetch("https://modnikky-api.herokuapp.com/api/cart", {
//             method: "POST",
//             body: {
//                 products: arrayIzKorzyny
//             }
//         });
//         const jsonData = await response.json();
//         dispatch({
//             type: SEARCH_DATA,
//             data: data
//         });
//     };
//ОЧИСТКА КОРЗИНЫ ПОСЛЕ УСПЕШНОГО ОТПРАВЛЕНИЯ POST запроса clearBasketreducer if sucsessful"200" post return [] сделать
// };

export const showSearch = (show) => {
    return {
        type: SHOW_SEARCH,
        show
    };
};

export const showSectionCategory = (show) => {
    return {
        type: SHOW_SECTION_CATEGORY,
        show
    };
};
export const showSearchResults = (show) => {
    return {
        type: SHOW_SEARCH_RESULT,
        show
    };
};

export const inputText = (search) => {
    return {
        type: SEARCH_INPUT_TEXT,
        search
    };
};

export const currentPageToShow = (number) => {
    return {
        type: CURRENT_PAGE_TO_SHOW,
        number: number
    };
};
