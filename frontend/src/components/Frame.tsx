import { makeStyles } from '@material-ui/core';
import { AppBar, Box, FormControl, Grid, MenuItem, Select, SelectChangeEvent, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import DetailFertigungssystem from './DetailFertigungssystem';
import DetailTestsystem from './DetailTestsystem';
import DetailKomponente from './DetailKomponente';
import App from './Unit-App';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Frame() {
  const [language, setLanguage] = React.useState('');

  const handleChangeFirst = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };
  const [value, setValue] = React.useState(0);

  const handleChangeSecond = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Equidat - Equipment-Datenbank für Prüfsysteme
          </Typography>
          <Box sx={{ minWidth: 100 }}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Language"
                onChange={handleChangeFirst}
              >
                <MenuItem value={1} sx={{ minWidth: 100 }}>Deutsch</MenuItem>
              <MenuItem value={2} sx={{ minWidth: 100 }}>English</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container spacing={1}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChangeSecond} aria-label="basic tabs example">
              <Tab label="Fertigungssysteme" {...a11yProps(0)} sx={{ minWidth: 200 }}/>
              <Tab label="Testsysteme" {...a11yProps(1)} sx={{ minWidth: 200 }}/>
              <Tab label="Komponenten" {...a11yProps(2)} sx={{ minWidth: 200 }}/>
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <App />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <DetailTestsystem />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <DetailKomponente />
          </TabPanel>
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Frame;