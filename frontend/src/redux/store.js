import { createStore, applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducer";
import { thunk } from "redux-thunk";
import { reminderReducer } from "./reducers/reminderReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    reminder: reminderReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;