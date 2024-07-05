import React, { createContext, useState, useContext, useEffect } from "react";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("pune");
  const [mostSearched, setMostSearched] = useState([
    "delhi",
    "mumbai",
    "new-york",
    "dubai",
    "london",
    "paris",
    "tokyo",
    "sydney",
    "rome",
    "berlin",
    "hong-kong",
    "shanghai",
    "singapore",
    "istanbul",
    "rio-de-janeiro",
    "mexico-city",
    "toronto",
    "buenos-aires",
    "cape-town",
    "athens"
  ]);
  const [watchlistItems, setWatchlistItems] = useState([]);
  const [mostSearchedData, setMostSearchedData] = useState([]);
  const [searchedCities, setSearchedCities] = useState([]); 

  const updateWeatherData = (data) => {
    setWeatherData(data);
  };

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=cf6cae627141447e9e6113102230410&q=${city}`
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch weather data: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch weather data");
      return null;
    }
  };

  const addSearchedCity = (city) => {
    setSearchedCities((prevCities) => {
    
      if (!prevCities.includes(city)) {
        console.log(searchedCities);
        return [...prevCities, city];
     
      }
      return prevCities;
    });
  };

  useEffect(() => {
   
    fetchWeather(city).then((data) => {
      if (data) {
        updateWeatherData(data);
      }
    });
  }, [city]);

  useEffect(() => {
    const fetchWatchlistData = async () => {
      const mostCityData = await Promise.all(
        mostSearched.map((city) => fetchWeather(city))
      );
      setMostSearchedData(mostCityData);
    };
    fetchWatchlistData();
  }, [mostSearched]);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        updateWeatherData,
        setCity,
        city,
        watchlistItems,
        setWatchlistItems,
        mostSearchedData,
        setMostSearched,
        addSearchedCity, 
        searchedCities 
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };

export const useWeatherContext = () => useContext(WeatherContext);

export default WeatherProvider;
