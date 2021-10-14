import React from 'react';
import Filter from './components/Filter';
import Uebersicht from './components/Uebersicht'
import { Grid} from '@material-ui/core';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Paper><Filter></Filter></Paper>
      </Grid>
      <Grid item xs={1}>
        <Paper><IconButton aria-label="add">
        <AddToPhotosIcon />
      </IconButton></Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper><Uebersicht></Uebersicht></Paper>
      </Grid>
    </Grid>

  );
} export default App;
