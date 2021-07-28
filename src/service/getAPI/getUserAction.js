import { GET_USER_BY_ID } from "../userTypes";
import axios from "../../api/axios"




export const getUserById = (id, dataObject) => {
    return (dispatch) => {
        axios.get("/getUserById" + id)
        dispatch({
            type: GET_USER_BY_ID,
            payload: dataObject
        })
    }
}