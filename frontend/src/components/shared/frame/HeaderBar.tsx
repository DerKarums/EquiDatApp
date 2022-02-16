import { AppBar, Box, FormControl, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { De, Gb } from 'react-flags-select';
import { useTranslation } from "react-i18next";
import i18n from '../../../i18n/config';

const HeaderBar = () => {
    const { t } = useTranslation();
    const [language, setLanguage] = React.useState('de');

    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
        i18n.changeLanguage(event.target.value);
    };

    return (
    <AppBar position="static"  color="secondary">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {t("headerBar.title")}
            </Typography>
            <Box sx={{ minWidth: 100 }}>
                <FormControl fullWidth>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={language}
                        onChange={handleChange}
                        autoWidth
                        defaultValue={language}
                    >
                        <MenuItem value={"de"} sx={{ minWidth: 100 }}><De fontSize="large" />Deutsch</MenuItem>
                        <MenuItem value={"en"} sx={{ minWidth: 100 }}><Gb fontSize="large" />English</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Toolbar>
    </AppBar>
    )
}

export default HeaderBar;