import { GET_RESOURCE_SUCCESS } from "../userTypes";

const initialState = {
    resource: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESOURCE_SUCCESS:
            console.log("Get resource successfully");

            return {
                ...state,
                resource: action.payload



            }

        default:
            return state;
    }
}


export default reducer;