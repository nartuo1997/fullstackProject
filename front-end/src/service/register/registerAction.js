import { USER_REQUEST, USER_SUCCESS, USER_FAILURE, USER_SAVED_SUCCESS } from "../userTypes";
import axios from '../../api/axios';

// export const fetchUsers = () => {
//     return (dispatch) => {
//         dispatch(userRequest());
//         axios
//             .get(
//                 "/findAll"
//             )
//             .then((response) => {
//                 dispatch(userSuccess(response.data));
//             })
//             .catch((error) => {
//                 dispatch(userFailure(error.message));
//             });
//     };
// };

// export const registerUser = (userObject) => {
//     return async (dispatch) => {
//         const response = await axios.post('/user/register');

//         dispatch({type:UT.USER_REQUEST});

//         response.post("/user/register", userObject)
//             .then((response) => {
//                 dispatch({
//                     type: UT.USER_SAVED_SUCCESS,
//                     payload: response.data.message,
//                 });
//             })
//             .catch((error) => {
//                 dispatch(userFailure(error.message));
//             });
//     };
// };

export const registerUser = (userObject) => {
    return (dispatch) => {
        dispatch(userRequest());
        axios
            .post("/user/register", userObject)
            .then((response) => {
                console.log(response)
                dispatch({
                    type: USER_SUCCESS,
                    payload: response.data.message,
                });
            })
            .catch((error) => {
                dispatch(userFailure(error.message));
            });
    };
};

const userRequest = () => {
    return {
        type: USER_REQUEST,
    };
};

const userSuccess = (users) => {
    return {
        type: USER_SUCCESS,
        payload: users,
    };
};

const userFailure = (error) => {
    return {
        type: USER_FAILURE,
        payload: error,
    };
};
