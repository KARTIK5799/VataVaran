
import style from './WeatherView.module.css'
import Card from '../Card/Card'
import { useWeatherContext } from "../../WeatherDataContext";

const WeatherView = () => {
  const {mostSearchedData}=useWeatherContext();
  return (
    <div className={style.weatherViewSection}>
    <div className={style.weatherCardSection}>
        <div><Card type={"searched"}/></div>
        <div className={style.mostSearchedSection}>

        {mostSearchedData && mostSearchedData.map((item,idx) => (
    <Card key={idx} type={"mostSearched"} mostCityName={item.location.name} mostCityTemp={item.current.temp_c} condition={item.current.condition.text}/>
))}

       
        </div>
    </div>
    <div className={style.watchListSection}>
    <Card type={"watchList"}/>
   
    </div>
 
    </div>
  )
}

export default WeatherView
