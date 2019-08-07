import { combineReducers } from "redux";
import chatTitle from "./chatTitle";
import msg from "./msg"
const allReducers = combineReducers({
    chatTitle,
    msg
});

export default allReducers;