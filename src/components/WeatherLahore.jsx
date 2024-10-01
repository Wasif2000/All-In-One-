import { useEffect, useState } from 'react';

const WeatherLahore = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Lahore, Pakistan');
  const [searchCity, setSearchCity] = useState('');

  // Function to fetch weather data
  const fetchWeather = async (location) => {
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

  // Fetch weather of Lahore by default
  useEffect(() => {
    fetchWeather('Lahore, Pakistan');
  }, []);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchCity) {
      fetchWeather(searchCity);
      setCity(searchCity);
      setSearchCity(''); // Clear search bar
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
      {/* Search bar to search for a city's weather */}
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          placeholder="Enter city name..."
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Search
        </button>
      </form>

      {/* Weather card */}
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
        <div className="flex justify-center text-6xl">
          {renderWeatherIcon(weather.current.condition.text)}
        </div>
        <h1 className="text-2xl font-bold mt-4">
          Current Weather in {weather.location.name}, {weather.location.country}
        </h1>
        <p className="text-lg mt-2">Temperature: {weather.current.temp_c}°C</p>
        <p className="text-lg">Condition: {weather.current.condition.text}</p>
        <p className="text-lg">Wind Speed: {weather.current.wind_kph} kph</p>
        <p className="text-lg">Humidity: {weather.current.humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherLahore;
