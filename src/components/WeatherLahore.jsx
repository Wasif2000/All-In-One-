import { useEffect, useState } from 'react';

const WeatherComparison = () => {
  const [weatherLahore, setWeatherLahore] = useState(null);
  const [weatherCity1, setWeatherCity1] = useState(null);
  const [weatherCity2, setWeatherCity2] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city1, setCity1] = useState('');
  const [city2, setCity2] = useState('');

  // Function to fetch weather data
  const fetchWeather = async (location, setWeather) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=355a77fec62e422bba1103052242609&q=${location}&aqi=0`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Fetch weather for Lahore by default
  useEffect(() => {
    fetchWeather('Lahore, Pakistan', setWeatherLahore);
  }, []);

  // Handle search for city 1 and city 2
  const handleFetchCity1 = () => {
    if (city1) {
      fetchWeather(city1, setWeatherCity1);
    }
  };

  const handleFetchCity2 = () => {
    if (city2) {
      fetchWeather(city2, setWeatherCity2);
    }
  };

  const renderWeatherIcon = (condition) => {
    switch (condition) {
      case 'Clear':
        return <i className="sun-icon">☀️</i>;
      case 'Partly cloudy':
        return <i className="cloud-sun-icon">🌤️</i>;
      case 'Cloudy':
        return <i className="cloud-icon">☁️</i>;
      case 'Rain':
        return <i className="rain-icon">🌧️</i>;
      case 'Thunderstorm':
        return <i className="storm-icon">⛈️</i>;
      default:
        return <i className="default-icon">🌦️</i>;
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      {/* Input fields for two cities */}
      <div className="flex mb-4">
        <input
          type="text"
          value={city1}
          onChange={(e) => setCity1(e.target.value)}
          placeholder="Enter first city..."
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mr-2"
        />
        <button
          onClick={handleFetchCity1}
          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Compare City 1
        </button>
      </div>

      <div className="flex mb-4">
        <input
          type="text"
          value={city2}
          onChange={(e) => setCity2(e.target.value)}
          placeholder="Enter second city..."
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mr-2"
        />
        <button
          onClick={handleFetchCity2}
          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Compare City 2
        </button>
      </div>

      {/* Weather cards for Lahore and the two cities */}
      <div className="flex justify-between w-full max-w-lg space-x-4">
        {/* Lahore Weather Card */}
        {weatherLahore && (
          <div className="bg-white rounded-lg shadow-lg p-6 text-center w-full">
            <div className="flex justify-center text-6xl">
              {renderWeatherIcon(weatherLahore.current.condition.text)}
            </div>
            <h1 className="text-2xl font-bold mt-4">
              Current Weather in {weatherLahore.location.name}, {weatherLahore.location.country}
            </h1>
            <p className="text-lg mt-2">Temperature: {weatherLahore.current.temp_c}°C</p>
            <p className="text-lg">Condition: {weatherLahore.current.condition.text}</p>
            <p className="text-lg">Wind Speed: {weatherLahore.current.wind_kph} kph</p>
            <p className="text-lg">Humidity: {weatherLahore.current.humidity}%</p>
          </div>
        )}

        {/* City 1 Weather Card */}
        {weatherCity1 && (
          <div className="bg-white rounded-lg shadow-lg p-6 text-center w-full">
            <div className="flex justify-center text-6xl">
              {renderWeatherIcon(weatherCity1.current.condition.text)}
            </div>
            <h1 className="text-2xl font-bold mt-4">
              Current Weather in {weatherCity1.location.name}, {weatherCity1.location.country}
            </h1>
            <p className="text-lg mt-2">Temperature: {weatherCity1.current.temp_c}°C</p>
            <p className="text-lg">Condition: {weatherCity1.current.condition.text}</p>
            <p className="text-lg">Wind Speed: {weatherCity1.current.wind_kph} kph</p>
            <p className="text-lg">Humidity: {weatherCity1.current.humidity}%</p>
          </div>
        )}

        {/* City 2 Weather Card */}
        {weatherCity2 && (
          <div className="bg-white rounded-lg shadow-lg p-6 text-center w-full">
            <div className="flex justify-center text-6xl">
              {renderWeatherIcon(weatherCity2.current.condition.text)}
            </div>
            <h1 className="text-2xl font-bold mt-4">
              Current Weather in {weatherCity2.location.name}, {weatherCity2.location.country}
            </h1>
            <p className="text-lg mt-2">Temperature: {weatherCity2.current.temp_c}°C</p>
            <p className="text-lg">Condition: {weatherCity2.current.condition.text}</p>
            <p className="text-lg">Wind Speed: {weatherCity2.current.wind_kph} kph</p>
            <p className="text-lg">Humidity: {weatherCity2.current.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherComparison;
