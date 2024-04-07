
import style from './WeatherView.module.css'
import Card from '../Card/Card'

const WeatherView = () => {
  return (
    <div className={style.weatherViewSection}>
    <div className={style.weatherCardSection}>
        <div><Card type={"searched"}/></div>
        <div className={style.mostSearchedSection}><Card type={"mostSearched"}/>
        <Card type={"mostSearched"}/>
        <Card type={"mostSearched"}/>
        <Card type={"mostSearched"}/>
        </div>
    </div>
    <div className={style.watchListSection}>
    <Card type={"watchList"}/>
    </div>
    </div>
  )
}

export default WeatherView
