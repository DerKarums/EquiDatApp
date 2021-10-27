import { AppBar, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Toolbar, Typography } from '@mui/material';
import { De, Gb } from 'react-flags-select';

interface HeaderBarProps {
    language: string;
    setLanguage(language: string): void;
}
const HeaderBar = ({ language, setLanguage }: HeaderBarProps) => {

    const handleChangeFirst = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
    };

    return (<AppBar position="static">
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
                        onChange={handleChangeFirst}
                        autoWidth
                        displayEmpty
                    >
                        <MenuItem value={""} sx={{ minWidth: 100 }}><De fontSize="large" /> Deutsch</MenuItem>
                        <MenuItem value={2} sx={{ minWidth: 100 }}><Gb fontSize="large" /> English</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Toolbar>
    </AppBar>
    )
}

export default HeaderBar;