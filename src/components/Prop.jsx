import React, { useState, useEffect } from 'react';

const Prop = () => {
  // Step 1: State Setup
  const [weather, setWeather] = useState(null); // To store the weather data
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To handle errors

  // Step 2: useEffect for API call with try-catch
  useEffect(() => {
    const fetchWeather = async () => {
      
        // Start API request
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=355a77fec62e422bba1103052242609&q=pakistan&aqi=0');
        
      

        // Parse the response as JSON
        const data = await response.json();
      
        

        // Step 3: Store the weather data in the state
        setWeather(data);

        // Step 4: Turn off the loading state
        setLoading(false);
      
    };

    fetchWeather(); // Trigger the API call

  }, []); // Empty array means this effect runs once, when the component mounts

  // Step 5: Render the content conditionally
  if (loading) {
    return <div>Loading...</div>; // Show loading text while fetching
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error if something goes wrong
  }

  return (
    <div>
      <h1>Current Weather in {weather.location.name}, {weather.location.country}</h1>
      <p>Temperature: {weather.current.temp_c}°C</p>
      <p>Condition: {weather.current.condition.text}</p>
      <p>Wind Speed: {weather.current.wind_kph} kph</p>
      <p>Humidity: {weather.current.humidity}%</p>
    </div>
  );
};

export default Prop;
