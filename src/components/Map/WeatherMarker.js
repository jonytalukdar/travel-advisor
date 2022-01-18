import React from 'react';
import { useGolbalContext } from '../../context/context';

const WeatherMarker = () => {
  const { weatherData } = useGolbalContext();

  return (
    <div>
      {weatherData?.list?.length &&
        weatherData.list.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              height="70px"
              alt={data.name}
            />
          </div>
        ))}
    </div>
  );
};

export default WeatherMarker;
