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
      console.log(data);
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Fetch weather of Lahore by default
  useEffect(() => {
    fetchWeather(city);
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

  // Icon mapping for different weather conditions
  const weatherIcons = {
    Clear: '☀️',
    Partlycloudy: '🌤️',
    Cloudy: '☁️',
    Rain: '🌧️',
    Thunderstorm: '⛈️',
    Snow: '❄️',
    Mist: '🌫️',
    Fog: '🌫️',
    Haze: '🌫️',
  };

  // Render weather icon with animation
  const renderWeatherIcon = (condition) => {
    const icon = weatherIcons[condition] || '🌦️'; // Use default icon if condition is not found
    return <i className={`icon-animation text-[40px]`}>{icon}</i>;
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400 p-4">
      <div className="w-full max-w-xs">
        {/* Search bar to search for a city's weather */}
        <form onSubmit={handleSearch} className="w-full flex">
          <input
            type="text"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            placeholder="Enter city name..."
            className="flex-grow p-2 rounded-tl-lg focus:outline-none"
          />
          <button
            type="submit"
            className="p-2 bg-gray-300 text-black rounded-tr-lg hover:bg-blue-400 hover:text-white focus:outline-none"
          >
            Search
          </button>
        </form>

        {/* Weather card */}
        <div className='flex gap-2 bg-white rounded-b-lg p-5 w-auto'>
          <div className="w-fit">
            <h1 className="text-[12px] font-extrabold text-gray-500">
              Current Weather in {weather.location.name}, {weather.location.country}
            </h1>
            <p className="text-[11px] mt-2 text-gray-400">Temperature: {weather.current.temp_c}°C</p>
            <p className="text-[11px] text-lg text-gray-400">Condition: {weather.current.condition.text}</p>
            <p className="text-lg text-[11px] text-gray-400">Wind Speed: {weather.current.wind_kph} kph</p>
            <p className="text-lg text-[11px] text-gray-400">Humidity: {weather.current.humidity}%</p>
          </div>
          <div className="flex justify-center mt-10">
            {renderWeatherIcon(weather.current.condition.text)} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherLahore;
