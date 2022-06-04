import {PRODUCT_DATA_LOAD} from "../types";


const initialState = [];

const productLoadReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_DATA_LOAD:
            return action.data
        default:
            return state;
    }
}

export default productLoadReducer;