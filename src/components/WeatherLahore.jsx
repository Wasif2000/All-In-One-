import { useEffect, useState } from 'react';

const WeatherLahore = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          'https://api.weatherapi.com/v1/current.json?key=355a77fec62e422bba1103052242609&q=pakistan&aqi=0'
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

    fetchWeather();
  }, []); // empty dependency array to run effect only on mount

  if (loading) {
    return <div>Please Wait...</div>;
  }

  if (error) {
    return <div>Nothing Found: {error}</div>;
  }

  return (
    <div>
      <h1>
        Current Weather in {weather.location.name}, {weather.location.country}
      </h1>
      <p>Temperature: {weather.current.temp_c}°C</p>
      <p>Condition: {weather.current.condition.text}</p>
      <p>Wind Speed: {weather.current.wind_kph} kph</p>
      <p>Humidity: {weather.current.humidity}%</p>
    </div>
  );
};

export default WeatherLahore;
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=772e10a277578cc3905df5e9d515f700