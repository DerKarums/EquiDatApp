import { makeStyles, Switch } from '@material-ui/core';
import { AppBar, Box, FormControl, Grid, MenuItem, Select, SelectChangeEvent, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import DetailFertigungssystem from './DetailFertigungssystem';
import DetailTestsystem from './DetailTestsystem';
import DetailKomponente from './DetailKomponente';
import App from './Unit-App';
import HeaderBar from './shared/frame/HeaderBar';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface FrameProps {
  children?: React.ReactNode;
  language: string,
  setLanguage(language: string): void;
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

function Frame({ language, setLanguage }: FrameProps) {

  const [value, setValue] = React.useState(0);

  const handleChangeSecond = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={10}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChangeSecond} aria-label="basic tabs example">
                <Tab label="Fertigungssysteme" {...a11yProps(0)} sx={{ minWidth: 200 }} />
                <Tab label="Testsysteme" {...a11yProps(1)} sx={{ minWidth: 200 }} />
                <Tab label="Komponenten" {...a11yProps(2)} sx={{ minWidth: 200 }} />
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
    </>
  );
}

export default Frame;