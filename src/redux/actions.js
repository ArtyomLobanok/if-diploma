import {
    CATALOG_DATA_LOAD,
} from "./types";
import {catalogUrl} from "../configs/urlConfig";


export const catalogLoad = (params) => {
    return async dispatch => {
        const response = await fetch(`${catalogUrl}`);
        const jsonData = await response.json();
        const filteredDate = jsonData.filter((el) =>  el.type === params)

        console.log(filteredDate)

        dispatch({
            type: CATALOG_DATA_LOAD,
            data: filteredDate
        });
    };
};