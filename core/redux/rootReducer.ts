import { combineReducers } from "redux";
import chatReducer from "./chat";
import authReducer from './auth';
import signinReducer from "./signin";
import signupReducer from "./signup";
import modalReducer from './modal';
import searchReducer from "./search";

const rootReducer = combineReducers({
    chat: chatReducer,
    auth: authReducer,
    signin: signinReducer,
    signup: signupReducer,
    modal: modalReducer,
    search: searchReducer
});

export default rootReducer;