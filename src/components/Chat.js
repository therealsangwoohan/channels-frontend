<div>
<h2>{channel.channel_name}</h2>
<div className="messages"></div>
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