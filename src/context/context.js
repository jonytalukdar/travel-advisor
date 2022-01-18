import React, { createContext, useContext, useState, useEffect } from 'react';
import { getPlacesData, getWeatherData } from '../api/travelAdvisorAPI';

const AppContext = createContext();

export const useGolbalContext = () => useContext(AppContext);

const ContextProvider = ({ children }) => {
  //states
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({});

  const [weatherData, setWeatherData] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  const [autoComplete, setAutoComplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //for get currentPosition
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  //for fetch places
  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      setIsLoading(true);

      //get wheater data
      getWeatherData(coords.lat, coords.lng).then((data) =>
        setWeatherData(data)
      );

      //get places
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setRating('');
        setIsLoading(false);
      });
    }
  }, [type, bounds, coords]);

  //for filtered places
  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [rating, places]);

  // for autoComplete
  const onLoad = (autoC) => setAutoComplete(autoC);

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };

  ///context value
  const context = {
    type,
    setType,
    rating,
    setRating,
    coords,
    setCoords,
    bounds,
    setBounds,
    weatherData,
    setWeatherData,
    filteredPlaces,
    setFilteredPlaces,
    places,
    setPlaces,
    autoComplete,
    setAutoComplete,
    childClicked,
    setChildClicked,
    isLoading,
    setIsLoading,
    onLoad,
    onPlaceChanged,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default ContextProvider;
