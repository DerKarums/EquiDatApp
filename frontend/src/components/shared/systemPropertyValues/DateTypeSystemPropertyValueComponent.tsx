import SystemPropertyValueProps from "./SystemPropertyValueProps";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import deLocale from 'date-fns/locale/de';

const DateTypeSystemPropertyValueComponent = ({ mode, value, setValue }: SystemPropertyValueProps) => {
    const handleChange = (newDate: Date | null) => {
        setValue(newDate?.toUTCString() ?? null);
    };

    const dateValue: Date | null = value === null ? null : new Date(value);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={deLocale}>
            <DatePicker
                value={dateValue}
                disabled={mode !== "edit"}
                onChange={(newValue) => {
                    handleChange(newValue);
                }}
                clearable
                renderInput={(params) => (
                    <TextField
                        fullWidth
                        variant="standard"
                        {...params}
                    />
                )}
            />
        </LocalizationProvider>
    );
}

export default DateTypeSystemPropertyValueComponent;