import { addRecentSearch } from "./types";

export const addRecentSearchActions = (newCity) => {
  return {
    type: addRecentSearch,
    payload: newCity,
  };
};
