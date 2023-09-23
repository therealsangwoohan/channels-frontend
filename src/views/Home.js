import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "../components/LoginButton";
import OpenButton from "../components/OpenButton";
import Container from "react-bootstrap/Container";

function Home() {
    const { isAuthenticated } = useAuth0();

    return (
      <Container className="mt-5">
        <h1 className="display-1">Welcome to Channels 🤙</h1>
        <h1 className="display-1">Here you can talk to anyone about anything!</h1>
        {!isAuthenticated && (
          <LoginButton></LoginButton>
        )}
        {isAuthenticated && (
          <OpenButton></OpenButton>
        )}
      </Container>
    )
}

export default Home;