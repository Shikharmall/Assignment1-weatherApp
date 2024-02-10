import { addRecentSearch } from "./types";

export const addRecentSearchActions = (newCity,tempCity) => {
  return {
    type: addRecentSearch,
    payload: {
      city: newCity,
      temp: tempCity,
      timestamp: new Date().toLocaleString(), // Add current date and time
    },
  };
};

