import { useEffect, useState } from 'react';

const WeatherComparison = () => {
  const [cityOne, setCityOne] = useState('Lahore, Pakistan');
  const [cityTwo, setCityTwo] = useState('Karachi, Pakistan');
  const [searchCityOne, setSearchCityOne] = useState('');
  const [searchCityTwo, setSearchCityTwo] = useState('');
  const [weatherCityOne, setWeatherCityOne] = useState(null);
  const [weatherCityTwo, setWeatherCityTwo] = useState(null);
  const [loadingCityOne, setLoadingCityOne] = useState(true);
  const [loadingCityTwo, setLoadingCityTwo] = useState(true);
  const [errorCityOne, setErrorCityOne] = useState(null);
  const [errorCityTwo, setErrorCityTwo] = useState(null);

  // Function to fetch weather data
  const fetchWeather = async (location, setWeather, setLoading, setError) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=355a77fec62e422bba1103052242609&q=${location}&aqi=no`
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

  // Fetch weather for both cities on component mount
  useEffect(() => {
    fetchWeather(cityOne, setWeatherCityOne, setLoadingCityOne, setErrorCityOne);
    fetchWeather(cityTwo, setWeatherCityTwo, setLoadingCityTwo, setErrorCityTwo);
  }, [cityOne, cityTwo]);

  // Handle search for both cities
  const handleSearchCityOne = (e) => {
    e.preventDefault();
    if (searchCityOne) {
      setCityOne(searchCityOne);
      setSearchCityOne(''); // Clear search bar
    }
  };

  const handleSearchCityTwo = (e) => {
    e.preventDefault();
    if (searchCityTwo) {
      setCityTwo(searchCityTwo);
      setSearchCityTwo(''); // Clear search bar
    }
  };

  // Icon mapping based on actual condition code from the API
  const weatherIcons = {
    Sunny: '☀️',
    Clear: '☀️',
    Partlycloudy: '🌤️',
    Cloudy: '☁️',
    Overcast: '☁️',
    Mist: '🌫️',
    Patchyrainpossible: '🌦️',
    Lightdrizzle: '🌦️',
    Rain: '🌧️',
    Thunderstorm: '⛈️',
    Snow: '❄️',
    Fog: '🌫️',
    Haze: '🌫️',
  };

  const renderWeatherIcon = (condition) => {
    const normalizedCondition = condition.replace(/\s+/g, '').toLowerCase();
    const icon = weatherIcons[normalizedCondition] || '🌦️'; // Use default icon if condition is not found
    return <i className="icon-animation text-[40px]">{icon}</i>;
  };

  // Loading and error handling
  if (loadingCityOne || loadingCityTwo) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (errorCityOne || errorCityTwo) {
    return (
      <div className="text-red-500">
        {errorCityOne && <p>Error in City 1: {errorCityOne}</p>}
        {errorCityTwo && <p>Error in City 2: {errorCityTwo}</p>}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-400 ">
      <div className="w-full max-w-2xl grid grid-cols-2 gap-x-5">
        {/* Search bar for City One */}
        <form onSubmit={handleSearchCityOne} className="w-full flex ">
          <input
            type="text"
            value={searchCityOne}
            onChange={(e) => setSearchCityOne(e.target.value)}
            placeholder="Enter city name..."
            className="flex-grow p-2 rounded-tl-lg focus:outline-none"
          />
          <button
            type="submit"
            className="p-2 bg-gray-300 text-black rounded-tr-lg hover:bg-blue-400 hover:text-white "
          >
            Search
          </button>
        </form>

        {/* Search bar for City Two */}
        <form onSubmit={handleSearchCityTwo} className="w-full flex">
          <input
            type="text"
            value={searchCityTwo}
            onChange={(e) => setSearchCityTwo(e.target.value)}
            placeholder="Enter city name..."
            className="flex-grow p-2 rounded-tl-lg focus:outline-none"
          />
          <button
            type="submit"
            className="p-2 bg-gray-300 text-black rounded-tr-lg hover:bg-blue-400 hover:text-white"
          >
            Search
          </button>
        </form>

        {/* Weather card for City One */}
        <div className="flex gap-2 bg-white rounded-b-lg p-5 w-auto">
          <div className="w-fit">
            <h1 className="text-[12px] font-extrabold text-gray-500">
              Weather in {weatherCityOne.location.name}, {weatherCityOne.location.country}
            </h1>
            <p className="text-[11px] mt-2 text-gray-400">
              Temperature: {weatherCityOne.current.temp_c}°C
            </p>
            <p className="text-[11px] text-gray-400">
              Condition: {weatherCityOne.current.condition.text}
            </p>
            <p className="text-[11px] text-gray-400">Wind: {weatherCityOne.current.wind_kph} kph</p>
            <p className="text-[11px] text-gray-400">Humidity: {weatherCityOne.current.humidity}%</p>
          </div>
          <div className="flex justify-center items-center mt-4">
            {renderWeatherIcon(weatherCityOne.current.condition.text)}
          </div>
        </div>

        {/* Weather card for City Two */}
        <div className="flex gap-2 bg-white rounded-b-lg p-5 w-auto">
          <div className="w-fit">
            <h1 className="text-[12px] font-extrabold text-gray-500">
              Weather in {weatherCityTwo.location.name}, {weatherCityTwo.location.country}
            </h1>
            <p className="text-[11px] mt-2 text-gray-400">
              Temperature: {weatherCityTwo.current.temp_c}°C
            </p>
            <p className="text-[11px] text-gray-400">
              Condition: {weatherCityTwo.current.condition.text}
            </p>
            <p className="text-[11px] text-gray-400">Wind: {weatherCityTwo.current.wind_kph} kph</p>
            <p className="text-[11px] text-gray-400">Humidity: {weatherCityTwo.current.humidity}%</p>
          </div>
          <div className="flex justify-center items-center mt-4">
            {renderWeatherIcon(weatherCityTwo.current.condition.text)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherComparison;
