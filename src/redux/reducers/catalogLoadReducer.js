import {CATALOG_DATA_LOAD} from "../types";


const initialState = [];

const catalogLoadReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATALOG_DATA_LOAD:
            return action.data
        default:
            return state;
    }
}

export default catalogLoadReducer;