import { addRecentSearch } from "./types";

const initialState = {
  pastSearch: [],
};

const addRecentSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case addRecentSearch:
      return {
        ...state,
        pastSearch: [...state.pastSearch.slice(0, 4), action.payload],
      };
    default:
      return state;
  }
};

export default addRecentSearchReducer;
