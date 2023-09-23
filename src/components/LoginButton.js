import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function LoginButton() {
    const { loginWithRedirect } = useAuth0();
    const navigate = useNavigate();

    function handleLogin() {
        loginWithRedirect();
        navigate("/discover");
    }

    return (
        <button onClick={handleLogin}>
            Log In
        </button>
    )
}

export default LoginButton;