import { Input } from "@mui/material";
import SystemPropertyValueProps from "./SystemPropertyValueProps";

const StringTypeSystemPropertyValueComponent = ({mode, value, setValue}: SystemPropertyValueProps) => {
    const handleValueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    
    const getShownValue = () => {
        if (mode === "edit") {
            return value ?? "";
        } else {
            return value ? value : "#";
        }
    }

    const shownValue = getShownValue();
    
    return (
        <Input
            fullWidth
            type="text"
            disabled={mode !== "edit"}
            value={shownValue}
            onChange={handleValueChanged}
        />
    )
}

export default StringTypeSystemPropertyValueComponent;

