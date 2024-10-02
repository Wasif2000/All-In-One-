import { useEffect, useState } from 'react';

// Function to render weather icons based on weather condition
const renderWeatherIcon = (condition) => {
  switch (condition) {
    case 'Clear':
      return '☀️';
    case 'Partly cloudy':
      return '🌤️';
    case 'Cloudy':
      return '☁️';
    case 'Rain':
      return '🌧️';
    case 'Thunderstorm':
      return '⛈️';
    default:
      return '🌦️';
  }
};

const WeatherComparison = () => {
  const [weatherLahore, setWeatherLahore] = useState(null);
  const [weatherCity1, setWeatherCity1] = useState(null);
  const [weatherCity2, setWeatherCity2] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchCity1, setSearchCity1] = useState('');
  const [searchCity2, setSearchCity2] = useState('');

  // Function to fetch weather data
  const fetchWeather = async (location, setter) => {
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
      setter(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Fetch Lahore weather by default
  useEffect(() => {
    fetchWeather('Lahore, Pakistan', setWeatherLahore);
  }, []);

  // Handle search for City 1
  const handleSearchCity1 = (e) => {
    e.preventDefault();
    if (searchCity1) {
      fetchWeather(searchCity1, setWeatherCity1);
      setSearchCity1(''); // Clear search bar
    }
  };

  // Handle search for City 2
  const handleSearchCity2 = (e) => {
    e.preventDefault();
    if (searchCity2) {
      fetchWeather(searchCity2, setWeatherCity2);
      setSearchCity2(''); // Clear search bar
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-indigo-400 to-blue-500 pt-28">
      {/* Title */}
      <h1 className="text-4xl text-white font-bold mb-8">Weather Comparison</h1>

      {/* Search bars */}
      <div className="flex space-x-4 mb-8">
        <form onSubmit={handleSearchCity1} className="relative flex w-full max-w-sm">
          <input
            type="text"
            value={searchCity1}
            onChange={(e) => setSearchCity1(e.target.value)}
            placeholder=" first city..."
            className="flex-grow p-3 rounded-lg shadow-md focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-full px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none"
          >
            Search
          </button>
        </form>

        <form onSubmit={handleSearchCity2} className="relative flex w-full max-w-sm">
          <input
            type="text"
            value={searchCity2}
            onChange={(e) => setSearchCity2(e.target.value)}
            placeholder="Second city..."
            className="flex-grow p-3 rounded-lg shadow-md focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-full px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>

      {/* Weather cards in a row */}
      <div className="flex flex-row space-x-6">
        {weatherLahore && (
          <WeatherCard weather={weatherLahore} title="Current Weather in Lahore, Pakistan" />
        )}
        {weatherCity1 && (
          <WeatherCard weather={weatherCity1} title={`Current Weather in ${weatherCity1.location.name}`} />
        )}
        {weatherCity2 && (
          <WeatherCard weather={weatherCity2} title={`Current Weather in ${weatherCity2.location.name}`} />
        )}
      </div>
    </div>
  );
};

const WeatherCard = ({ weather, title }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center transform transition-all hover:scale-105">
    <div className="text-6xl mb-4">{renderWeatherIcon(weather.current.condition.text)}</div>
    <h1 className="text-xl font-semibold">{title}</h1>
    <p className="text-lg mt-2">Temperature: {weather.current.temp_c}°C</p>
    <p className="text-lg">Condition: {weather.current.condition.text}</p>
    <p className="text-lg">Wind Speed: {weather.current.wind_kph} kph</p>
    <p className="text-lg">Humidity: {weather.current.humidity}%</p>
  </div>
);

export default WeatherComparison;
