// src/store.js
import { createStore } from 'redux';

const initialState = {
  recentSearches: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_RECENT_SEARCH':
      return {
        ...state,
        recentSearches: [...state.recentSearches.slice(0, 4), action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
