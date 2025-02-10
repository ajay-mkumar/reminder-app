import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { thunk } from "redux-thunk";

const store = createStore(authReducer, applyMiddleware(thunk));

export default store;