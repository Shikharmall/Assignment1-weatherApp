import axios from "axios";
import { API_URL_BASE } from "../utils/apiURL";

const API = import.meta.env.VITE_KEY;

// API for getting weather

export const getWeatherAPI = async (city) => {
  try {
    let result = await axios(
      `${API_URL_BASE}/current.json?key=${API}&q=${city}`,
      {
        method: "GET",
      }
    );
    return result;
  } catch (error) {
    return error;
  }
};

// API getting past days weather data

export const getPastWeatherAPI = async (city) => {

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so we add 1
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  try {
    let result = await axios(
      `${API_URL_BASE}/history.json?key=${API}&q=${city}&dt=${formattedDate}`,
      {
        method: "GET",
      }
    );
    return result;
  } catch (error) {
    return error;
  }
};
