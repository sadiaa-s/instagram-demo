import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default function BottomNav() {
  return (
  
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">c
            <Nav.Link href="#home">
              <FaHome/>
              </Nav.Link>
            <Nav.Link href="#home">
              <FaSearch />
              </Nav.Link>
            <Nav.Link href="#home">
              <FaPlusSquare />
              </Nav.Link>
            <Nav.Link href="#home">
              <MdOndemandVideo />
              </Nav.Link>
              <Nav.Link href="#home">
              <CgProfile />
              </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
}