import style from "./Card.module.css";
import { useState } from "react";
import sun from '../../assets/sunny.svg'
import humid from '../../assets/humid.svg'
import wind from '../../assets/wind.svg'
import rainbow from '../../assets/rainbow.svg'
import CityCards from "../CityCards/CityCards";

const Card = ({ type }) => {
  const [searchedcity, setSearchcity] = useState(true);
  const [watchlistItems, setWatchlistItems] = useState(true);

  switch (type) {
    case "searched":
      return (
        <>{searchedcity ? 
        <div className={`${style.card} ${style.searchedCard} ${style.searchedDataCard} `}>
           <div className={style.weatherImg}>
            <img src={sun} alt="" />
            <button><span className="material-symbols-outlined" >add</span> Add To Watch List</button>
           </div>
           <div className={style.weatherData}>
           <p className={style.searchedTemperature}>33&#176; C</p>
           <p className={style.searchedWeatherCondition}>Clear</p>

           <p className={style.searchedPlace}>Aurangabad</p>
           <div className={style.windHumidity}>
                <div className={style.humiditySection}>
                  <img src={humid} alt="humidity" />
                  <div className={style.humidity}>
                    <p>68%</p>
                    <p>Humidity</p>
                  </div>
                </div>
                <div className={style.windSection}>
                <img src={wind} alt="wind" />
                  <div className={style.wind}>
                    <p>2Km/h</p>
                    <p>Wind</p>
                  </div>
                </div>
           </div>

           </div>
        </div> :
         <div className={`${style.card} ${style.searchedCard}  ${style.searchedNoDataCard} `}>
          <img src={rainbow} alt="" />
          <p>Want to Know your city Weather then <span className="material-symbols-outlined">
search
</span> at top </p>
          </div>}</>
      );

    case "mostSearched":
      return (
        <>
          <div className={`${style.card} ${style.mostCard}`}>
            <p className={style.mostCityName}>New York</p>
         
            <img src={sun} alt="" />
            <p>20&#176; C</p>
            
          </div>
        </>
      );

    case "watchList":
      return (
        <>
      
         {watchlistItems? <div className={`${style.card} ${style.watchListCards}`}>
         <h2>Watch List</h2>
            <CityCards text={"kartik"}/>
            <CityCards/>
            <CityCards/>
            <CityCards/>
            <CityCards/>
            <CityCards/>
            <CityCards/>
            

             </div>:
             <div className={`${style.card} ${style.watchListCards} ${style.emptyWatchList}`}>
              <p><span className="material-symbols-outlined">
add
</span> add citys to watch list</p>
              </div>}
        </>
      );

    default:
      <></>
  }
};

export default Card;
