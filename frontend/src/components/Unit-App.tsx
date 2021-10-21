import React, { useEffect, useState } from 'react';
import Filter from './Unit-Filter';
import Uebersicht from './Unit-Table'
import { Grid} from '@material-ui/core';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import {useCases} from '../providers/UseCaseProvider';
import {ManufacturingUnit} from 'core';

function App() {
  const allManufacturingUnitsUseCase = useCases.allManufacturingUnitsUseCase;

  const [manufacturingUnits, setManufacturingUnits] = useState<ManufacturingUnit[]>([]);
  useEffect(()=>{
    allManufacturingUnitsUseCase.getAllManufacturingUnits({setManufacturingUnitModels:setManufacturingUnits});
  },[]) 

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
        <Paper><Uebersicht subSystems={manufacturingUnits} shownSystemProperties={}></Uebersicht></Paper>
      </Grid>
    </Grid>

  );
} export default App;
