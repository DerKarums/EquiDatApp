import React from 'react';
import Filter from './components/Unit-Filter';
import UnitApp from './components/Unit-App'
import { Grid} from '@material-ui/core';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

function App() {

  const test = new SystemProperty("test", SystemPropertyType.StringType, true);

  return (
        <UnitApp></UnitApp>
  );
} export default App;
