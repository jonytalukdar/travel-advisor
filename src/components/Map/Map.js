import React from 'react';
import GoogleMapReact from 'google-map-react';

import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { LocationOnOutlined } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';

import useStyles from './MapStyles';

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery(`(min-width: 600px)`);
  const coordinates = { lat: 23.685, lng: 90.3563 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCf4kTOhX_ENFVHN1SKs4oONfeRNBc7BXk' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
