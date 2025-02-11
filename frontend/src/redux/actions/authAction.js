import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../types/authTypes";
import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../types/signupTypes";

export const loginUser = (credentials) => async(dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    try{
        const response = await fetch('http://localhost:8000/user/authUser', {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(credentials),
        });

        const data = await response.json();

        if(response.ok) {
            dispatch({ type: LOGIN_SUCCESS, payload: data });
            localStorage.setItem("userinfo", data);
        } else {
            dispatch({ type: LOGIN_FAILURE, payload: data});
        }
    } catch(error) {
        console.log(error);
        dispatch({ type: LOGIN_FAILURE, payload: "Network Error"});
    }
}

export const signupUser = (credentials) => async(dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });

    try{
        const response = await fetch('http://localhost:8000/user/', {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(credentials),
        });

        const data = await response.json();

        if(response.ok) {
            dispatch({ type: SIGNUP_SUCCESS, payload: data });
            localStorage.setItem("userinfo", data);
        } else {
            dispatch({ type: SIGNUP_FAILURE, payload: data});
        }
    } catch(error) {
        console.log(error);
        dispatch({ type: SIGNUP_FAILURE, payload: "Network Error"});
    }
}

export const logoutUser = () => async(dispatch) => {
    dispatch({ type: "LOGOUT_USER" });

    await fetch('http://localhost:8000/user/logout', {
        method: "POST"
    });
    localStorage.removeItem("userinfo");

    dispatch({ type: LOGOUT_SUCCESS});
}