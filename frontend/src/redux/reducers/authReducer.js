import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../types/authTypes";

const initialState = {
    loading: false,
    user: localStorage.getItem("userinfo") || null,
    error: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type){
        case LOGIN_REQUEST:
            return { ...state, loading: true};
        case LOGIN_SUCCESS:
            return { loading: false, user: action.payload, error: null};
        case LOGIN_FAILURE:
            return { loading: false, user: null, error: action.payload};
        case "LOGOUT_USER":
            return {...state, loading: false};
        case LOGOUT_SUCCESS:
            return { initialState }
        default:
            return state;
    }
}