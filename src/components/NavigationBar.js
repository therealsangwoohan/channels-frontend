import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import LogoutButton from "./LogoutButton";

function NavigationBar() {
    return (
      <Navbar expand="lg" bg="white" variant="light" className="border-0">
        <Container>
          <Nav>
            <Nav.Link href="/discover">Discover</Nav.Link>
            <Nav.Link href="/create-channel">Create a channel</Nav.Link>
          </Nav>
          <Nav>
            <LogoutButton></LogoutButton>
          </Nav>
        </Container>
      </Navbar> 
    )
}

export default NavigationBar;