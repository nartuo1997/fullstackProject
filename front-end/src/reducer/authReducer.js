import { combineReducers } from 'redux'

export default combineReducers({
    userReducer
})

let initialState = {
    name: '',
    email: '',
    password: '',

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return { ...state, email: state.email, password: state.password };
        case 'LOG_OUT':
            return;
        case 'SIGN_UP':
            return { ...state, name: state.name, email: state.email, password: state.password };

        default:
            return;
    }
}