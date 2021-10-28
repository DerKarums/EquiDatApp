import { Input } from "@mui/material";
import { Mode } from "../../detail/SystemPropertyOverview";

interface StringTypeSystemPropertyValueComponentProps {
    mode: Mode;
    value: string | null;
    setValue(value: string | null): void; 
}

const StringTypeSystemPropertyValueComponent = ({mode, value, setValue}: StringTypeSystemPropertyValueComponentProps) => {
    const handleValueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <Input
            fullWidth
            type="text"
            disabled={mode !== "edit"}
            value={mode !== "edit" && !value ? "#" : value}
            onChange={handleValueChanged}
        />
    )
}

export default StringTypeSystemPropertyValueComponent;