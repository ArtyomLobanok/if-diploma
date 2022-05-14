import {TEST_DATA} from "../types";

const initialState = [];

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST_DATA:
            return action.data
        default:
            return state;
    }
}

export default testReducer;