import { GET_CONTENT } from "../actionTypes/actionTypes";

const getContent = () => {
    return async (dispatch, getState) => {
        const response = await fetch('https://a1-content-management-server-production.up.railway.app/content');
        const result = await response.json();
        if (result.length) {
            dispatch({ type: GET_CONTENT, payload: result })
        }
    }
}

export default getContent;