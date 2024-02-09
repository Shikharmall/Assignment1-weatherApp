import axios from "axios";
import { API_URL_BASE } from "../utils/apiURL";

// API for getting weather

export const getWeatherAPI = async () => {
  try {
    let result = await axios(`${API_URL_BASE}`, {
      method: "GET",
    });
    return result;
  } catch (error) {
    return error;
  }
};

// API for updating recent search

export const updateRecentSearchAPI = async (id) => {
  try {
    let result = await axios(`${API_URL_BASE}${id}`, {
      method: "POST",
    });
    return result;
  } catch (error) {
    return error;
  }
};
