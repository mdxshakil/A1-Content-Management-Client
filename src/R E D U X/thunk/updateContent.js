import { UPDATE_CONTENT } from "../actionTypes/actionTypes";

const updateContent = (id, updatedData) => {
    return async (dispatch, getState) => {
        const response = await fetch(`https://a1-content-management-server-production.up.railway.app/content/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedData),
            headers: {
                'content-type': 'application/json'
            }
        });
        const result = await response.json();
        if (result.acknowledged) {
            dispatch({type: UPDATE_CONTENT})
        }
    }
}

export default updateContent;