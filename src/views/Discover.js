import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

function Discover() {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/channels')
            .then((response) => response.json())
            .then((data) => setChannels(data))
            .catch((error) => console.error('Error fetching channels:', error));
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <h1>Discover</h1>
            <div>
            {channels.map((channel) => 
                <a key={channel.channel_id}
                   href={`/channels/${channel.channel_id}`}>
                    <h2>{channel.channel_name}</h2>
                </a>
            )}
            </div>
        </div>
    )
}

export default Discover;