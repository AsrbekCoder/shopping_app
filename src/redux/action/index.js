import { combineReducers } from "redux";
import cartItem from "../reducer/cartItem";

const readReducer = combineReducers({
  cartItem,
});

export default readReducer;
