import {UNLOADING_DATA} from "../types";


const initialState = [];

const unloadDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case UNLOADING_DATA:
            return action.data
        default:
            return state;
    }
}

export default unloadDataReducer;