import { createStore } from "redux";
import addRecentSearchReducer from "./reducers";

//redux store holds application store......

const store = createStore(addRecentSearchReducer);


export default store;