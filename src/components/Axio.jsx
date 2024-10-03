// Weather.js
import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '355a77fec62e422bba1103052242609'; // Your API Key

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
      );
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError('City not found');
      setWeather(null);
    }
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
          <h2 className="text-xl font-semibold">{weather.location.name}</h2>
          <p>{weather.location.country}</p>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="weather icon" />
        </div>
      )}
    </div>
  );
};

export default Weather;
