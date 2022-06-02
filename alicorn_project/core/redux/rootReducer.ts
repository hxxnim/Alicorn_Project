import { combineReducers } from "redux";
import messageReducer from "./message";

const rootReducer = combineReducers({
    message: messageReducer,
    // signin: signinReducer,
});

export default rootReducer;