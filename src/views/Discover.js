import NavigationBar from "../components/NavigationBar";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";

import ChannelPreview from "../components/ChannelPreview";

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
            <NavigationBar></NavigationBar>
            <br />
            <Container>
              {channels.map((channel) => 
                <ChannelPreview key={channel.channel_id} channel={channel}></ChannelPreview>
              )}
            </Container>
        </div>
    )
}

export default Discover;