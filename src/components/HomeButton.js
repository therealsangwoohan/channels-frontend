import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";

function HomeButton() {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    const navigate = useNavigate();

    function handleClick() {
        if (!isAuthenticated) {
          loginWithRedirect();
        }
        navigate("/discover");
    }

    return (
        <Button onClick={handleClick} variant="outline-warning">
            Open Channels
        </Button>
    )
}

export default HomeButton;