import {SEARCH_INPUT_TEXT} from "../types";

const initialState = '';

const InputTextSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_INPUT_TEXT:
            return action.search
        default:
            return state;
    }
}

export default InputTextSearchReducer;