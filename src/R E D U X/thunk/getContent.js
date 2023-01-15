import { GET_CONTENT } from "../actionTypes/actionTypes";

const getContent = () => {
    return async (dispatch, getState) => {
        const response = await fetch('http://localhost:5000/content');
        const result = await response.json();
        if (result.length) {
            dispatch({ type: GET_CONTENT, payload: result })
        }
    }
}

export default getContent;