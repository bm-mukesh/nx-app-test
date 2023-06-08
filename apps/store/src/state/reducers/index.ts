import { combineReducers } from "redux";
import bankReducer from "./bankReducers";
import langReducer from "./langReducers";
import instituteReducer from "./instituteReducers";
import authReducer from "../auth/authReducers";

const reducers  = combineReducers({
    bank: bankReducer,
    lang:langReducer,
    institute:instituteReducer,
    auth:authReducer
})

export default reducers;

export type RootState = ReturnType<typeof reducers>