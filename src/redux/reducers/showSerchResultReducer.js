import {SHOW_SEARCH_RESULT} from "../types";

const initialState = false;

const showSearchResultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SEARCH_RESULT:
            return {
                ...state,
                show: action.show
            }
        default:
            return state;
    }
}

export default showSearchResultsReducer;