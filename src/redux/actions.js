import {
    CATALOG_DATA_LOAD,
    CURRENT_PAGE_TO_SHOW,
    PRODUCT_DATA_LOAD,
    SEARCH_DATA, SEARCH_INPUT_TEXT, SHOW_SEARCH, SHOW_SEARCH_RESULT,
    SHOW_SECTION_CATEGORY,
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

export const productLoad = (params) => {
    return async dispatch => {
        const response = await fetch(`${catalogUrl}`);
        const jsonData = await response.json();
        const filteredDate = jsonData.filter((el) => el.id === params)
        dispatch({
            type: PRODUCT_DATA_LOAD,
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
