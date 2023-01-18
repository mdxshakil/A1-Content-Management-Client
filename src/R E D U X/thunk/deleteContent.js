import { DELETE_CONTENT } from "../actionTypes/actionTypes"

const deleteContent = (id) => {
    return async (dispatch, getState) => {
        const response = await fetch(`https://a1-content-management-server-production.up.railway.app/content/${id}`,{
            method: 'DELETE',
        })
        const result = await response.json()
        if (result.acknowledged) {
            dispatch({type:DELETE_CONTENT, payload:id})
        }
    }
}

export default deleteContent;