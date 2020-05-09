import { combineReducers } from "redux";
import { FETCH_MESSAGES_SUCCESSFULL } from "../types";
const initialState = {
    messagesAPI: [],
    isFetching: false,
    error: ""
}

const MessagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MESSAGES_SUCCESSFULL:
            return { ...state, isFetching: false, messagesAPI: action.payload }
        default:
            return state;
    }
}

export const RootReducer = combineReducers({
    messages: MessagesReducer
})