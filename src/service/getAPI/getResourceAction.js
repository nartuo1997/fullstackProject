import { GET_RESOURCE_SUCCESS } from "../userTypes";
import axios from '../../api/axios';


export const getResource = () => {
    return (dispatch) => {
        axios.get("resource/getAll", {
            headers: {
                "Authorization": 'Bearer ' + sessionStorage.getItem('token')
            }
        })
            .then((response) => {
                let resource = response.data;
                dispatch(success(resource));
            })
            .catch((e) => {
                console.log("error:", e);
            })
    }
}


const success = (resourceObject) => {
    return {
        type: GET_RESOURCE_SUCCESS,
        payload: resourceObject
    }
}