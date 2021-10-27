import { Link } from "@mui/material"
import { useHistory } from "react-router-dom"

interface BreadCrumbLinkProps {
    label: string;
    targetUrl: string;
    active: boolean;
}

const BreadCrumbLink = ({ label, targetUrl, active }: BreadCrumbLinkProps) => {
    const history = useHistory();

    const handleClick = () => {
        if (!active) return;
        history.push(targetUrl);
    }

    return <Link
        component="button"
        underline={ active? "hover" : "none" }
        color="inherit"
        disabled={!active}
        sx={ active ? {} : {
            cursor: "default"
        }}
        onClick={handleClick}
    >
        { label }
    </Link>


}

export default BreadCrumbLink;