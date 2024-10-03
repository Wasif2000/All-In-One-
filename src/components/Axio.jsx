// Weather.js
import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '355a77fec62e422bba1103052242609'; // Your API Key

  const getWeather = () => {
    axios
      .get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
      .then((response) => {
        setWeather(response.data);
        setError('');
      })
      .catch(() => {
        setError('City not found');
        setWeather(null);
      });
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-4">Weather App</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="border p-2 rounded-l-md outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
          onClick={getWeather}
        >
          Get Weather
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {weather && (
        <div className="text-center">
          <h2 className="text-xl font-semibold">{weather.location.name}, {weather.location.country}</h2>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
          <div className="mt-4">
            <p><strong>Wind Speed:</strong> {weather.current.wind_kph} kph</p>
            <p><strong>Humidity:</strong> {weather.current.humidity}%</p>
            <p><strong>Visibility:</strong> {weather.current.vis_km} km</p>
            <p><strong>Feels Like:</strong> {weather.current.feelslike_c}°C</p>
            <p><strong>Cloud Cover:</strong> {weather.current.cloud}%</p>
          </div>
          <img src={weather.current.condition.icon} alt="weather icon" className="mx-auto" />

          {/* New Weather Features */}
          
        </div>
      )}
    </div>
  );
};

export default Weather;
