import { CLEAR_FILTER, FILTER_BY_TAGS, SORT_BY_FIRST_UPLOAD, SORT_BY_LAST_UPLOAD } from "../actionTypes/actionTypes";

const initialState = {
    filters: [],
    tags:[]
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_BY_FIRST_UPLOAD:
            if (state.filters.includes(action.payload)) {
                return {
                    ...state,
                    filters: []
                }
            }
            else{
                return {
                    ...state,
                    filters:[action.payload]
                }
            }

        case SORT_BY_LAST_UPLOAD:
            if (state.filters.includes(action.payload)) {
                return {
                    ...state,
                    filters: []
                }
            }else{
                return {
                    ...state,
                    filters:[action.payload]
                }
            }
        case FILTER_BY_TAGS:
            return{
                ...state,
                tags:action.payload
            }
        case CLEAR_FILTER:
            return{
                ...state,
                filters:[],
                tags:[]
            }
        default: return state
    }
}

export default filterReducer;