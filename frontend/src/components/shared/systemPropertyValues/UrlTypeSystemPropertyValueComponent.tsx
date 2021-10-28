import { Input } from "@mui/material";
import SystemPropertyValueProps from "./SystemPropertyValueProps";
import Link from '@mui/material/Link';

const UrlTypeSystemPropertyValueComponent = ({ mode, value, setValue }: SystemPropertyValueProps) => {
    const handleValueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    if (mode === "edit") {
        return (
            <Input
                fullWidth
                type="text"
                disabled={mode !== "edit"}
                value={value ?? ""}
                onChange={handleValueChanged}
            />
        )
    } else {
        const shownValue = value ? value : "#";
        return (
            <Link
                target="_blank" // open in new window
                rel="noreferrer" // for security, see https://web.dev/external-anchors-use-rel-noopener/
                href={shownValue}
                underline="hover"
            >
                {shownValue}
            </Link>
        )
    }

}

export default UrlTypeSystemPropertyValueComponent;

