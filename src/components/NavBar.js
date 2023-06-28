import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";

let content;
let isLoggedin=0;

if(isLoggedin){
    content=(
        <NavDropdown title="user" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">profile</NavDropdown.Item>
            <NavDropdown.Item href="#action4">cart</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">logout</NavDropdown.Item>
        </NavDropdown>
    )
}else{
    content=<Nav.Link as={Link} to="/login">login</Nav.Link>
}


function NavScrollExample() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/cart">cart</Nav.Link>
                {content}
            </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavScrollExample;