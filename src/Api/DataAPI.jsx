import axios from "axios";
import { API_URL_BASE } from "../utils/apiURL";

const API = import.meta.env.VITE_KEY;

// API for getting weather

export const getWeatherAPI = async (city) => {
  console.log(API);
  try {
    let result = await axios(`${API_URL_BASE}?key=${API}&q=${city}`, {
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
