import { useNavigate } from "react-router-dom";

function OpenButton() {
    const navigate = useNavigate();

    function navigateToDiscover() {
        navigate("/discover");
    }

    return (
        <button onClick={navigateToDiscover}>
            Open Channels
        </button>
    )
}

export default OpenButton;