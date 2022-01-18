import React from 'react';
import GoogleMapReact from 'google-map-react';
import PlaceMarker from './PlaceMarker';
import WeaterMarker from './WeatherMarker';

import mapStyles from '../../mapStyles';
import useStyles from './styles.js';
import { useGolbalContext } from '../../context/context';

const Map = () => {
  const { coords, setCoords, setBounds, setChildClicked } = useGolbalContext();

  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {/* marker */}
        <PlaceMarker />
        <WeaterMarker />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
