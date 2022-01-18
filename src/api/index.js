import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const response = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key':
            '2789b86488msh93cdd1b70cfd18dp1488e3jsn57778bff1b65',
        },
      }
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
