import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducers from "./usersReducers";

export default combineReducers({
  posts: postsReducer,
  users: usersReducers,
});
