import HomeButton from "../components/HomeButton";
import Container from "react-bootstrap/Container";

function Home() {
    return (
      <Container className="mt-5">
        <h1 className="display-1">Welcome to Channels 🤙</h1>
        <h1 className="display-6">Here you can talk to anyone about anything!</h1>
        <HomeButton></HomeButton>
      </Container>
    )
}

export default Home;