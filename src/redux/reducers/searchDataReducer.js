import {SEARCH_DATA} from "../types";


const initialState = [];

const searchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_DATA:
            return action.data
        default:
            return state;
    }
}

export default searchDataReducer;