
import style from './CityCards.module.css'; 
import sun from '../../assets/sunny.svg';

const CityCards = ({ text }) => {
  return (
    <div className={style.watchListCard}>
      <img src={sun} alt="" />
      <p>{text ? text : "Aurangabad"}</p>
      <p>20&#176; C</p>
      <button><span className="material-symbols-outlined">delete</span></button>
    </div>
  );
};

export default CityCards;
