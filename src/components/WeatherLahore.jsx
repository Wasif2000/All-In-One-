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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* Search bar to search for a city's weather */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          placeholder="Enter city name..."
        />
        <button type="submit">Search</button>
      </form>

      {/* Display weather details */}
      <h1>Current Weather in {weather.location.name}, {weather.location.country}</h1>
      <p>Temperature: {weather.current.temp_c}°C</p>
      <p>Condition: {weather.current.condition.text}</p>
      <p>Wind Speed: {weather.current.wind_kph} kph</p>
      <p>Humidity: {weather.current.humidity}%</p>
    </div>
  );
};

export default WeatherLahore;
