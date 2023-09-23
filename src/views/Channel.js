import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Navbar from "../components/Navbar";
import socketIO from "socket.io-client";

function Channel() {
  
  const {channel_id} = useParams();
  const { user } = useAuth0();
  
  const [channel, setChannel] = useState();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  
  const socket = socketIO.connect("http://localhost:4500", {query: `channel_id=${channel_id}`});

  useEffect(() => {
    fetch(`http://localhost:4000/api/channels/${channel_id}`)
    .then((response) => response.json())
    .then((data) => setChannel(data))
    .catch((error) => console.error('Error fetching channel:', error));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4000/api/messages?channel_id=${channel_id}`)
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error('Error fetching messages:', error));
  }, []);

  useEffect(() => {
    socket.on("message", function(data) {
      setMessages([...messages, data]);
    });
  }, [messages]);

  function sendMessage() {
    socket.emit("message", {
      channel_id: channel_id,
      user_id: user.username,
      sent_at: new Date(),
      text: message,
    });
    setMessage("");
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
          <Navbar></Navbar>
          <div>
              <h2>{channel.channel_name}</h2>
              <div className="messages">
              {messages.map((message) => 
                <div key={message.message_id}>
                  <p>{message.text}</p>
                </div>
              )}
              </div>
              <div className="inputs">
                  <input
                      type="text"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                  />
                  <button onClick={sendMessage}>
                      Send
                  </button>
              </div>
          </div>
      </div>     
  )
}

export default Channel;