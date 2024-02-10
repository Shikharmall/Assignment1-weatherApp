import { addRecentSearch } from "./types";

const initialState = {
  pastSearch: [],
};

const addRecentSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case addRecentSearch:
      return {
        ...state,
        pastSearch: state.pastSearch.length !== 5
          ? [...state.pastSearch, action.payload]
          : [...state.pastSearch.slice(1, 5), action.payload],
      };
    default:
      return state;
  }
};

export default addRecentSearchReducer;
