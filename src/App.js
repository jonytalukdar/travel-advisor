import React from 'react';

import Headers from '../src/components/Header/Header';
import List from '../src/components/List/List';
import Map from '../src/components/Map/Map';

import { CssBaseline, Grid } from '@mui/material';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Headers />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
