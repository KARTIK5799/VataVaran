import React, { useState, useRef } from 'react';
import style from './WeatherView.module.css';
import Card from '../Card/Card';
import { useWeatherContext } from "../../WeatherDataContext";

const WeatherView = () => {
  const { mostSearchedData } = useWeatherContext();
  const [scrollIndex, setScrollIndex] = useState(0);
  const containerRef = useRef(null);

  const handlePrevClick = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
      containerRef.current.style.transform = `translateX(-${(scrollIndex - 1) * 210}px)`;
    }
  };

  const handleNextClick = () => {
    if (scrollIndex < mostSearchedData.length - 1) {
      setScrollIndex(scrollIndex + 1);
      containerRef.current.style.transform = `translateX(-${(scrollIndex + 1) * 210}px)`;
    }
  };

  return (
    
    
    <div className={style.weatherCardSection}>
       <div className={style.weatherChartSection}>
       <div><Card type={"searched"}/></div>
       <div><Card type={"chart"}/></div>
       </div>
      <div className={style.weatherCardSection}>
        <div className={style.mostSearchedSection}>
          <button className={`${style.sliderButton} ${style.sliderButtonLeft}`} onClick={handlePrevClick}>
            &lt;
          </button>
          <div className={style.mostSearchedContainer} ref={containerRef}>
            {mostSearchedData && mostSearchedData.map((item, idx) => (
              <div className={style.card} key={idx}>
                <Card
                  type={"mostSearched"}
                  mostCityName={item.location.name}
                  mostCityTemp={item.current.temp_c}
                  condition={item.current.condition.text}
                />
              </div>
            ))}
          </div>
          <button className={`${style.sliderButton} ${style.sliderButtonRight}`} onClick={handleNextClick}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeatherView;
