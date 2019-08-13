import { combineReducers } from "redux";
import chatTitle from "./chatTitle";
import defaultChatMsg from "./defaultChatMsg"

const allReducers = combineReducers({
    chatTitle,
    defaultChatMsg
});

export default allReducers;