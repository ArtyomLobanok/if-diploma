import {
    CATALOG_DATA_LOAD, PRODUCT_DATA_LOAD, SHOW_SECTION_CATEGORY,
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

export const showSectionCategory = (show) => {
    return {
        type: SHOW_SECTION_CATEGORY,
        show
    };
};
