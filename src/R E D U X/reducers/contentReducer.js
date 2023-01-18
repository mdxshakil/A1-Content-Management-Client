import { ADD_CONTENT, ADD_TO_READING_HISTORY, DELETE_CONTENT, GET_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

const initialState = {
    contents: [],
    history: []
};

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTENT: {
            return {
                ...state,
                contents: [...state.contents, action.payload]
            }
        }
        case GET_CONTENT: {
            return {
                ...state,
                contents: action.payload
            }
        }
        case UPDATE_CONTENT: {
            return state
        }
        case DELETE_CONTENT: {
            const remainingContents = state.contents.filter(content => content._id !== action.payload)
            return {
                ...state,
                contents: remainingContents
            }
        }
        case ADD_TO_READING_HISTORY:
            const exists = state.history.find(content => content._id === action.payload._id);
            if (exists) {
                const index = state.history.indexOf(exists);
                state.history.splice(index, 1);
                state.history.unshift(exists)
                return state
            } else {
                return {
                    ...state,
                    history: [...state.history, action.payload]
                }
            }
        default: return state;
    }
}

export default contentReducer;