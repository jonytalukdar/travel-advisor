import axios from 'axios';

const URL = `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`;

export const getPlacesData = async (sw, ne) => {
  try {
    const response = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '2789b86488msh93cdd1b70cfd18dp1488e3jsn57778bff1b65',
      },
    });
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
