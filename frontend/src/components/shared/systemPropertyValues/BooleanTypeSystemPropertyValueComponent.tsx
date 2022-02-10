import { Checkbox } from "@mui/material";
import { ChangeEvent } from "react";
import SystemPropertyValueProps from "./SystemPropertyValueProps";

const BooleanTypeSystemPropertyValueComponent = ({ mode, value, setValue }: SystemPropertyValueProps) => {
    const boolValue = parseBoolean(value);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.checked.toString());
    };

    return (
        <Checkbox
            checked={boolValue}
            onChange={handleChange}
            disabled={mode !== "edit"}
            inputProps={{ 'aria-label': 'controlled' }}
       />
    )
}

const parseBoolean = (value: string | null): boolean => {
    if (value === "true") {
        return true;
    }
    if (value === "false" || value === null) {
        return false;
    }
    console.warn(`'${value}' is not a valid boolean value. Parsing it as false.`);
    return false;
}


export default BooleanTypeSystemPropertyValueComponent;