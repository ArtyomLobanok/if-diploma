import {
    CATALOG_DATA_LOAD,
    CURRENT_PAGE_TO_SHOW,
    SEARCH_DATA, SEARCH_INPUT_TEXT, SEND_ARRAY_BASKET, SEND_EMAIL, SHOW_SEARCH, SHOW_SEARCH_RESULT,
    SHOW_SECTION_CATEGORY, UNLOADING_DATA,
} from "./types";
import {cartUrl, catalogUrl, subscriptionUrl} from "../configs/urlConfig";


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

export const basket = (idArray) => {
    return async dispatch => {
        const response = await fetch(`${cartUrl}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "products": idArray
            })
        });
        const responseData = await response.json();
        dispatch({
            type: SEND_ARRAY_BASKET,
            data: responseData
        });
    };
};

export const sendEmail = (params) => {
    return async dispatch => {
        const response = await fetch(`${subscriptionUrl}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": params
            })
        });
        const responseData = await response.json();
        dispatch({
            type: SEND_EMAIL,
            data: responseData
        });
    };
};

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
