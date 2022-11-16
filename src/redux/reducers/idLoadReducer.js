import {SEND_ARRAY_BASKET} from "../types";


const initialState = [];

const idLoadReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_ARRAY_BASKET:
            return action.data
        default:
            return state;
    }
}

export default idLoadReducer;