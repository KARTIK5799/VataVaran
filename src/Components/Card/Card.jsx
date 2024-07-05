import React from "react";
import style from "./Card.module.css";
import sun from "../../assets/sunny.svg";
import cloudy from "../../assets/partly_cloudy.svg";
import rainbow from "../../assets/rainbow.svg";
import snow from "../../assets/snow.svg";
import humid from "../../assets/humid.svg";
import wind from "../../assets/wind.svg";
import rain from "../../assets/rain.svg";
import WeatherChart from "./WeatherChart";
import { useWeatherContext } from "../../WeatherDataContext";

const weatherImages = {
  Sunny: sun,
  Clear: sun,
  Mist: humid,
  "Patchy heavy snow": snow,
  "Light snow showers": snow,
  "Partly cloudy": cloudy,
  "Light rain": rain,
  "Patchy rain nearby": rain,
  "Moderate rain": rain,
  "Moderate or heavy rain shower": rain,
  "Torrential rain shower": rain,
  Overcast: cloudy,
  Fog: cloudy,
  default: rainbow
};

const CardWeather = ({ type, mostCityName, mostCityTemp, condition }) => {
  const { weatherData } = useWeatherContext();

  const getWeatherImage = (conditionText) => {
    return weatherImages[conditionText] || weatherImages.default;
  };

  if (!weatherData) {
    return (
      <div className={`${style.card} ${style.noDataCard}`}>
        <img src={weatherImages.default} alt="No data" />
        <p>No data found</p>
      </div>
    );
  }

  switch (type) {
    case "searched":
      return (
        <div className={`${style.card} ${style.searchedCard} ${style.searchedDataCard}`}>
          <div className={style.weatherImg}>
            <img src={getWeatherImage(weatherData.current.condition.text)} alt={weatherData.current.condition.text} />
          </div>
          <div className={style.weatherData}>
            <p className={style.searchedTemperature}>
              {weatherData.current.temp_c}°C
            </p>
            <p className={style.searchedWeatherCondition}>
              {weatherData.current.condition.text}
            </p>
            <p className={style.searchedPlace}>
              {weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}
            </p>
            <div className={style.windHumidity}>
              <div className={style.humiditySection}>
                <img src={humid} alt="Humidity" />
                <div className={style.humidity}>
                  <p>{weatherData.current.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className={style.windSection}>
                <img src={wind} alt="Wind" />
                <div className={style.wind}>
                  <p>{weatherData.current.wind_kph} Km/h</p>
                  <p>Wind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "chart":
      return (
        <div className={`${style.card} ${style.chartCard}`}>
          <WeatherChart
            data={{
              temp: weatherData.current.temp_c,
              humidity: weatherData.current.humidity,
              wind: weatherData.current.wind_kph,
            }}
          />
        </div>
      );

    case "mostSearched":
      return (
        <div className={`${style.card} ${style.mostCard}`}>
          <p className={style.mostCityName}>{mostCityName}</p>
          <img src={getWeatherImage(condition)} alt={condition} />
          <p>{mostCityTemp}&#176; C</p>
        </div>
      );

    default:
      return null;
  }
};

export default CardWeather;
