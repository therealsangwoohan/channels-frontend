import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function CreateChannel() {
    const { user } = useAuth0();
    const [channelName, setChannelName] = useState(`${user.username}'s channel`);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const channel = {
            "admin_id": user.username,
            "channel_name": channelName 
        };

        fetch(`${process.env.REACT_APP_CHANNELS_BACKEND_API}/api/channels`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(channel)
        }).then(() => {
            navigate("/discover");
        });
    }

    return (
        <div>
            <NavigationBar></NavigationBar>
            <br />
            <Container>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Channel name</Form.Label>
                <Form.Control
                  type="text"
                  value={channelName}
                  onChange={(e) => setChannelName(e.target.value)}
                  required
                />
              </Form.Group>
            </Form>
            </Container>
        </div>
    )
}

export default CreateChannel;