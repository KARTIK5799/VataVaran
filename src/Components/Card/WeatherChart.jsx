import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';
import style from './WeatherChart.module.css';
import { useTheme } from '../../theme-context'; 
import { Height, WidthFull } from '@mui/icons-material';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement);

const WeatherChart = ({ data }) => {
  const { theme } = useTheme(); 

  const chartData = {
    labels: ['Temperature', 'Humidity', 'Wind'],
    datasets: [
      {
        label: 'Current Weather',
        data: [data.temp, data.humidity, data.wind],
        fill: false,
        tension: 0.1,
      },
    ],
  };
  

  return (
    <div className={style.chartContainer}>
      <Line data={chartData} />
    </div>
  );
};

export default WeatherChart;
