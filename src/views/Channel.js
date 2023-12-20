import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import NavigationBar from "../components/NavigationBar";
import { socket } from "../socket";

function Channel() {
  
  const {channel_id} = useParams();
  const { user } = useAuth0();
  
  const [channel, setChannel] = useState();
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CHANNELS_BACKEND_API}/api/channels/${channel_id}`)
    .then((response) => response.json())
    .then((data) => setChannel(data))
    .catch((error) => console.error('Error fetching channel:', error));
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_CHANNELS_BACKEND_API}/api/messages?channel_id=${channel_id}`)
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error('Error fetching messages:', error));
  }, []);

  useEffect(() => {
    socket.on('connect', joinChannel);
    socket.on('disconnect', onDisconnect);
    socket.on('chat', handleMessage);

    function joinChannel() {
      console.log("onConnect");
      socket.emit("join", channel_id);
    }

    function onDisconnect() {
      console.log("onDisconnect");
    }

    function handleMessage(data) {
      setMessages([...messages, data]);
      console.log(messages);
    }

    return () => {
      socket.off('connect', joinChannel);
      socket.off('disconnect', onDisconnect);
      socket.off('chat', handleMessage);
    };
  }, []);

  function sendMessage() {
    socket.emit("chat", {
      channel_id: channel_id,
      user_id: user.username,
      sent_at: new Date(),
      text: text,
    });
    setText("");
  }

  if (channel === undefined) {
      return (
          <div>
              <p>Loading channel...</p>
          </div>
      )
  }

  return (
      <div>
          <NavigationBar></NavigationBar>
          <br />
          <Container>
            <Row>
              <Col>
                <h2>{channel.channel_name}</h2>
                <Card>
                  <Card.Body>
                  {messages.map((message) => (
                    <Card.Text key={message.message_id}>
                      {message.user_id}: {message.text}
                    </Card.Text>
                  ))}
                  </Card.Body>
                </Card>
                <br />
                <div className="inputs">
                  <input
                      type="text"
                      required
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                  />
                  <button onClick={sendMessage}>
                      Send
                  </button>
              </div>
              </Col>
            </Row>
          </Container>
      </div>     
  )
}

export default Channel;