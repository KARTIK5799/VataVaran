import { useState } from 'react';
import { useWeatherContext } from '../../WeatherDataContext'
import style from './SearchForm.module.css'

const SearchForm = () => {
  const {setCity}=useWeatherContext();
  const [cityInput, setCityInput] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    setCity(cityInput)
  }

  const handleChange=(e)=>{
setCityInput(e.target.value)
  }
  return (
    <div className={style.searchbarSection}>
      <form className={style.searchbar} onSubmit={handleSubmit}>
        <input type="text" placeholder='search wanted city' className={style.searchInput} value={cityInput} onChange={handleChange}/>
        <button className={style.searchButton}><span className="material-symbols-outlined">
search
</span></button>
      </form>
    </div>
  )
}

export default SearchForm
