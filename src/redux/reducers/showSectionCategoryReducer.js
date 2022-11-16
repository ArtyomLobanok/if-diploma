import {SHOW_SECTION_CATEGORY} from "../types";


const initialState = false;

const showSectionCategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SECTION_CATEGORY:
            return {
                ...state,
                show: action.show
            }
        default:
            return state;
    }
}

export default showSectionCategoryReducer;