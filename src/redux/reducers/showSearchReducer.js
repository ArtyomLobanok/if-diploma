import {SHOW_SEARCH} from "../types";


const initialState = false;

const showSectionCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SEARCH:
            return action.show
        default:
            return state;
    }
}

export default showSectionCategoryReducer;