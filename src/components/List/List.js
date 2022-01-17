import React, { useState } from 'react';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Grid,
} from '@material-ui/core';

import useStyles from './ListStyles';

const List = () => {
  const classes = useStyles();

  //states
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const places = [
    { name: 'Cool Place' },
    { name: 'Awesome Place' },
    { name: 'Amazing Place' },
    { name: 'Amazing Place' },
    { name: 'Amazing Place' },
    { name: 'Amazing Place' },
    { name: 'Amazing Place' },
  ];

  return (
    <div className={classes.container}>
      <Typography variant="h5">
        Restaurants, Hotels @ Attractions around you
      </Typography>
      {/* for select */}
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="atrractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      {/* for ratings */}
      <FormControl className={classes.formControl}>
        <InputLabel>Ratings</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value="0">All</MenuItem>
          <MenuItem value="3">Above 3</MenuItem>
          <MenuItem value="4">Above 4</MenuItem>
          <MenuItem value="4.5">Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid className={classes.list} container spacing={3}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
