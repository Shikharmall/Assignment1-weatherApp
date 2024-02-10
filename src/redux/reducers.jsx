import { addRecentSearch } from "./types";

const initialState = {
  pastSearch: [],
};

const addRecentSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case addRecentSearch:
      return {
        ...state,
        recentSearches: [...state.recentSearches.slice(0, 4), action.payload],
      };
    default:
      return state;
  }
};

export default addRecentSearchReducer;
