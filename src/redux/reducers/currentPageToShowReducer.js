import {CURRENT_PAGE_TO_SHOW} from "../types";


const initialState = 1;

const currentPageToShowReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_PAGE_TO_SHOW:
            return action.number
        default:
            return state;
    }
}

export default currentPageToShowReducer;