import { ADD_CONTENT } from "../actionTypes/actionTypes";

const postContent = (content) => {
    return async (dispatch, getState) => {
        const response = await fetch('http://localhost:5000/content', {
            method: 'POST',
            body: JSON.stringify(content),
            headers: {
                'content-type': 'application/json'
            }
        })
        const result = await response.json();
        if (result.insertedId) {
            dispatch({ type: ADD_CONTENT, payload: { ...content, _id: result.insertedId } })
        }
    }
}

export default postContent;