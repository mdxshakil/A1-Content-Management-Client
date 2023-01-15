import { UPDATE_CONTENT } from "../actionTypes/actionTypes";

const updateContent = (id, updatedData) => {
    return async (dispatch, getState) => {
        const response = await fetch(`http://localhost:5000/content/${id}`, {
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