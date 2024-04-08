
import style from './CityCards.module.css'; 
import sun from '../../assets/sunny.svg';
import cloudy from '../../assets/partly_cloudy.svg'

import snow from '../../assets/snow.svg';
import humid from '../../assets/humid.svg'

import rain from '../../assets/rain.svg'

const CityCards = ({ text,cityName,cityTemp,cityCondition }) => {

  const renderWeatherImageCards = () => {
    switch (cityCondition) {
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
  return (
    <div className={style.watchListCard}>
   {renderWeatherImageCards()}
      <p>{cityName}</p>
      <p>{cityTemp}&#176; C</p>
      
    </div>
  );
};

export default CityCards;
