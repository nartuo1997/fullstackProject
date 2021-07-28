import { LOGOUT_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, GET_USER_BY_ID } from "../userTypes";
import axios from '../../api/axios';

export const authenticateUser = (userName, password) => {
    const credentials = {
        userName: userName,
        password: password,
    };
    return (dispatch) => {
        // dispatch({
        //     type: LOGIN_REQUEST,
        // });
        axios
            .post("/user/authenticate", credentials)
            .then((response) => {
                console.log(response)
                let data = response.data;
                // localStorage.setItem("jwtToken", token);
                // console.log('response from action', data);
                dispatch(success(data));

                // isLoggedIn: true
            })
            .catch(() => {
                dispatch(failure());
            });
    };
};

export const logoutUser = () => {
    return (dispatch) => {
        dispatch({
            type: LOGOUT_REQUEST,
        });

        // localStorage.removeItem("jwtToken");
        // dispatch(success(false));
    };
};








const success = (userObject) => {
    return {
        type: LOGIN_SUCCESS,
        payload: userObject, // action.payload {}
        // userToken => action.usrToken
    };
};

const failure = () => {
    return {
        type: LOGIN_FAILURE,
        // payload: false,
    };
};

