import Card from 'react-bootstrap/Card';

function ChannelPreview({ channel }) {
  return (
    <a href={`/channels/${channel.channel_id}`} style={{textDecoration: 'none'}}>
      <Card>
        <Card.Body>
          <Card.Title>{channel.channel_name}</Card.Title>
        </Card.Body>
      </Card>
    </a>
  )
}

export default ChannelPreview;