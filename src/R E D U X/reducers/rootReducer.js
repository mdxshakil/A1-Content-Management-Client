import { combineReducers } from "redux";
import contentReducer from "./contentReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
    contentReducer: contentReducer,
    filterReducer: filterReducer
})

export default rootReducer;