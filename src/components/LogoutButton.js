import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

function LogoutButton() {
    const { logout } = useAuth0();

    return (
        <Button onClick={() => logout()} variant="outline-warning">
            Log Out
        </Button>
    )
}

export default LogoutButton;