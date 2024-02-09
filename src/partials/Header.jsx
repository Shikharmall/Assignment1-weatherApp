// Install dependencies:
// npm install axios chart.js

// WeatherApp.js
import React, { useState, useEffect } from "react";
import Logo from "/weatherLogo.svg";
import { Link } from "react-router-dom";
//import Chart from 'chart.js';

/*const Header = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState('C'); // Default to Celsius
  const [recentSearches, setRecentSearches] = useState([]);

  const API_KEY = 'YOUR_WEATHERAPI_COM_API_KEY';
  const API_URL = 'https://api.weatherapi.com/v1/current.json';

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          key: API_KEY,
          q: city,
        },
      });
      setWeatherData(response.data);
      updateRecentSearches(city);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  };

  const updateRecentSearches = (newCity) => {
    const updatedRecentSearches = [...recentSearches.slice(0, 4), newCity];
    setRecentSearches(updatedRecentSearches);
  };

  useEffect(() => {
    if (city.trim() !== '') {
      fetchWeatherData();
    }
  }, [city, unit]);

  useEffect(() => {
    // Render chart with past weather data
    if (weatherData) {
      const ctx = document.getElementById('weatherChart').getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5'],
          datasets: [
            {
              label: 'Temperature',
              data: [20, 22, 18, 25, 21],
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2,
              fill: false,
            },
          ],
        },
      });
    }
  }, [weatherData]);

  return (
    <div>
      <header>
        <h1>Weather App</h1>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <select onChange={(e) => setUnit(e.target.value)}>
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
        </select>
      </header>

      <main>
        {weatherData && (
          <div>
            <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
            <p>Temperature: {weatherData.current.temp_c}&deg;{unit === 'C' ? 'C' : 'F'}</p>
            <p>Weather: {weatherData.current.condition.text}</p>
            <p>Wind Speed: {weatherData.current.wind_kph} km/h</p>
          </div>
        )}

        <canvas id="weatherChart" width="400" height="200"></canvas>

        <div>
          <h3>Recent Searches</h3>
          <ul>
            {recentSearches.map((search, index) => (
              <li key={index}>{search}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};



export default Header;*/

export default function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={Logo} alt="logo" className="w-6 h-6 m-1"/>
        <span className="font-semibold text-xl tracking-tight">Weather App</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Home
          </Link>
          <Link
            to="/recentsearch"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Recent Searches
          </Link>
        </div>

        <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download
          </a>
        </div>

      </div>
    </nav>
  );
}
