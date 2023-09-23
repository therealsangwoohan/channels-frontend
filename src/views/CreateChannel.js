import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function CreateChannel() {
    const { user } = useAuth0();
    const [channelName, setChannelName] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const channel = {
            "admin_id": user.username,
            "channel_name": channelName 
        };

        fetch("http://localhost:4000/api/channels", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(channel)
        }).then(() => {
            console.log("New channel created");
            navigate("/discover");
        });
    }

    return (
        <div>
            <Navbar></Navbar>
            <h3>Create Channel</h3>
            <form onSubmit={handleSubmit}>
                <label>Channel name:</label>
                <input 
                    type="text"
                    required
                    value={channelName}
                    onChange={(e) => setChannelName(e.target.value)}
                />
                <button>Create</button>
            </form>
        </div>
    )
}

export default CreateChannel;