import {SEND_EMAIL} from "../types";


const initialState = [];

const emailSendReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_EMAIL:
            return action.data
        default:
            return state;
    }
}

export default emailSendReducer;