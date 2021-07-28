import { LOGIN_REQUEST, LOGOUT_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, GET_USER_BY_ID } from "../userTypes";

const AUTH_KEY = 'auth';
const AUTH_TOKEN = 'token';
const initialState = {
    token: "",
    userName: "",
    email: "",
    userId: "",
    isLoggedIn: JSON.parse(sessionStorage.getItem(AUTH_KEY)) || null, // null, true, false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        //login
        case LOGIN_REQUEST:
            return { ...state, isLoggedIn: true };


        case LOGIN_SUCCESS:
            // const { userName, email, userId } = action.payload;
            sessionStorage.setItem(AUTH_KEY, true);
            sessionStorage.setItem(AUTH_TOKEN, action.payload.token);
            // console.log("From auth Reducer", action.payload)
            return {
                ...state, userName: action.payload.userName,
                email: action.payload.email,
                userId: action.payload.userId,
                token: action.payload.token,
                isLoggedIn: true
            };

        case LOGIN_FAILURE:
            console.log("Login failure from reducer")
            sessionStorage.setItem(AUTH_KEY, false);
            return {
                ...state,
                isLoggedIn: false
            };

        // logout
        case LOGOUT_REQUEST:
            sessionStorage.removeItem('auth')
            console.log("Logout", initialState.isLoggedIn)
            return {
                ...state,
                isLoggedIn: null
            };

        case GET_USER_BY_ID:
            return {
                ...state,
                userName: action.payload.userName
            }

        default:
            return state;
    }
};

// logout
// 1. toggle isLoggedIn => false, null
// 2. sessionStorage.clear();'

export default reducer;
