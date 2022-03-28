import { createStore } from "redux";
import readReducer from "./action";

const store = createStore(readReducer);

export default store;
