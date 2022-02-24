import { ChangeEvent } from "react";
import SystemPropertyValueProps from "./SystemPropertyValueProps";
import TextField from '@mui/material/TextField';

const NumberTypeSystemPropertyValueComponent = ({ mode, value, setValue }: SystemPropertyValueProps) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;

        // set the value to null if the field is left empty
        setValue(newValue ? newValue : null);
    };

    const error = mode === "edit" && value !== null && !value.match(/^[0-9]*$/g)

    return (
        <TextField
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={value ?? ""}
            error={error}
            helperText={error && "Nur ganze Zahlen erlaubt"}
            disabled={mode !== "edit"}
            inputProps={{
                'aria-label': 'controlled',
                "inputMode": "numeric",
                "font-kerning": "normal"
            }}

        />

    )
}

export default NumberTypeSystemPropertyValueComponent;