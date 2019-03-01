import { createStore, combineReducers } from "redux";
import Todo from "./Reducers/Todo";
import User from "./Reducers/User";

const rootReducers = combineReducers({
  Todo,
  User
});
const store = createStore(rootReducers, {});
export default store;
