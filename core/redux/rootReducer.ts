import { combineReducers } from "redux";
import messageReducer from "./message";
import authReducer from './auth';
import signinReducer from "./signin";
import modalReducer from './modal';

const rootReducer = combineReducers({
    message: messageReducer,
    signin: signinReducer,
    auth: authReducer,
    modal: modalReducer,
});

export default rootReducer;