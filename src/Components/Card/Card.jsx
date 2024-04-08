import React from 'react';
import style from "./Card.module.css";
import sun from '../../assets/sunny.svg';
import cloudy from '../../assets/partly_cloudy.svg'
import rainbow from '../../assets/rainbow.svg';
import snow from '../../assets/snow.svg';
import humid from '../../assets/humid.svg'
import wind from '../../assets/wind.svg'
import rain from '../../assets/rain.svg'
import CityCards from "../CityCards/CityCards";
import { useWeatherContext } from "../../WeatherDataContext";

const Card = ({ type, mostCityName, mostCityTemp, condition }) => {
  const { weatherData, watchlistItems, setWatchlistItems } = useWeatherContext();

  const addToWatchlist = () => {
    if (weatherData) {
      const newItem = {
        name: weatherData.location.name,
        region: weatherData.location.region,
        country: weatherData.location.country,
        temperature: weatherData.current.temp_c,
        condition: weatherData.current.condition.text
      };
  
      console.log("New item to be added to watchlist:", newItem);
  
      setWatchlistItems(prevItems => {
        console.log("Previous watchlist items:", prevItems);
        return [...prevItems, newItem];
      });
    } else {
      console.log("No weather data available to add to watchlist.");
    }
  };
  

  const renderWeatherImage = () => {
    switch (weatherData.current.condition.text) {
      case "Sunny":
        return <img src={sun} alt="" />;
      case "Mist":
        return <img src={humid} alt="" />;
      case "Patchy heavy snow":
      case "Light snow showers":
        return <img src={snow} alt="" />;
      case "Partly cloudy":
        return <img src={cloudy} alt="" />;
      case "Light rain":
      case "Patchy rain nearby":
      case "Moderate rain":
        return <img src={rain} alt="" />;
      case "Overcast":
        return <img src={cloudy} alt="" />;
      default:
        return null;
    }
  };

  const renderWeatherImageCards = () => {
    switch (condition) {
      case "Sunny":
        return <img src={sun} alt="" />;
      case "Mist":
        return <img src={humid} alt="" />;
      case "Patchy heavy snow":
      case "Light snow showers":
        return <img src={snow} alt="" />;
      case "Partly cloudy":
        return <img src={cloudy} alt="" />;
      case "Light rain":
      case "Patchy rain nearby":
      case "Moderate rain":
        return <img src={rain} alt="" />;
      case "Overcast":
        return <img src={cloudy} alt="" />;
      default:
        return null;
    }
  };

  switch (type) {
    case "searched":
      return (
        <>
          {weatherData ? (
            <div className={`${style.card} ${style.searchedCard} ${style.searchedDataCard}`}>
              <div className={style.weatherImg}>
                {renderWeatherImage()}
                <button onClick={addToWatchlist}><span className="material-symbols-outlined">add</span> Add To Watch List</button>
              </div>
              <div className={style.weatherData}>
                <p className={style.searchedTemperature}>{weatherData.current.temp_c}°C</p>
                <p className={style.searchedWeatherCondition}>{weatherData.current.condition.text}</p>
                <p className={style.searchedPlace}>{weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</p>
                <div className={style.windHumidity}>
                  <div className={style.humiditySection}>
                    <img src={humid} alt="humidity" />
                    <div className={style.humidity}>
                      <p>{weatherData.current.humidity}%</p>
                      <p>Humidity</p>
                    </div>
                  </div>
                  <div className={style.windSection}>
                    <img src={wind} alt="wind" />
                    <div className={style.wind}>
                      <p>{weatherData.current.wind_kph}Km/h</p>
                      <p>Wind</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={`${style.card} ${style.searchedCard} ${style.searchedNoDataCard}`}>
              <img src={rainbow} alt="" />
              <p>Want to Know your city Weather then <span className="material-symbols-outlined">search</span> at top</p>
            </div>
          )}
        </>
      );

    case "mostSearched":
      return (
        <div className={`${style.card} ${style.mostCard}`}>
          <p className={style.mostCityName}>{mostCityName}</p>
          {renderWeatherImageCards()}
          <p>{mostCityTemp}&#176; C</p>
        </div>
      );

    case "watchList":
      return (
        <>
          {watchlistItems ? (
            <div className={`${style.card} ${style.watchListCards}`}>
              <h2>Watch List</h2>
              {watchlistItems.map((item, idx) => (
                <CityCards key={idx} cityName={item.name} cityTemp={item.temperature} cityCondition={item.condition} />
              ))}
            </div>
          ) : (
            <div className={`${style.card} ${style.watchListCards} ${style.emptyWatchList}`}>
              <p><span className="material-symbols-outlined">add</span> add cities to watch list</p>
            </div>
          )}
        </>
      );

    default:
      return null;
  }
};

export default Card;
