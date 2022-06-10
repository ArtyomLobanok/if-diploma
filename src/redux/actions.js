import {
    CATALOG_DATA_LOAD,
    CURRENT_PAGE_TO_SHOW,
    PRODUCT_DATA_LOAD,
    SEARCH_DATA, SHOW_SEARCH,
    SHOW_SECTION_CATEGORY,
} from "./types";
import {catalogUrl} from "../configs/urlConfig";


export const catalogLoad = (params) => {
    return async dispatch => {
        const response = await fetch(`${catalogUrl}`);
        const jsonData = await response.json();
        const filteredDate = jsonData.filter((el) =>  el.type === params)
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
        const filteredDate = jsonData.filter((el) =>  el.id === params)
        dispatch({
            type: PRODUCT_DATA_LOAD,
            data: filteredDate
        });
    };
};

export const inputSearchText = (params) => {
    return async dispatch => {
        const response = await fetch(`${catalogUrl}`);
        const jsonData = await response.json();
        const searchData = jsonData.filter((el) =>  el.name === params || el.type === params)
        dispatch({
            type: SEARCH_DATA,
            data: searchData
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

export const currentPageToShow = (number) => {
    return {
        type: CURRENT_PAGE_TO_SHOW,
        number: number
    };
};
