import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../types/authTypes";
import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../types/signupTypes";

const initialState = {
    loading: false,
    user: (localStorage.getItem("userinfo")) ? JSON.parse((localStorage.getItem("userinfo"))) : null,
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
            case SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null
            };
        case SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}