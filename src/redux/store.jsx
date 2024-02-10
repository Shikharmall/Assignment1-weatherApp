import { createStore } from "redux";
import addRecentSearchReducer from "./reducers";

const store = createStore(addRecentSearchReducer);

export default store;
