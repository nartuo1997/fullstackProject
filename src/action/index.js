// this file is not being used

import axios from "../api/axios"

export const login = () => async dispatch => {
    const response = await axios.post('/authenticate')
    dispatch({ type: 'LOG_IN', payload: response })
}

export const logout = () => {
    return {
        type: 'LOG_OUT'
    }
}

export const signup = () => async dispatch => {
    const response = await axios.post('/register')
    dispatch({ type: 'SIGN_UP', payload: response })
}



