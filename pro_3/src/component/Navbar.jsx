import React from 'react'
import { useContext } from 'react'
import { Themecontex } from '../contex/Themecontex'
import { AuthContext } from '../contex/AuthContext'

function Navbar() {
  const { theme } = useContext(Themecontex);
  const { user, Login, Logout } = useContext(AuthContext);

  return (
    <Navbar bg={theme} variant={theme} expand="lg" className={`navbar ${theme}`}>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              Theme is {theme === "light" ? "light" : "dark"}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              User is {user ? "logged in" : "logged out"}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Button variant="outline-primary" onClick={Login} className="mr-2">Login</Button>
            <Button variant="outline-danger" onClick={Logout}>Logout</Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navbar