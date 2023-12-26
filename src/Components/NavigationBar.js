import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { toast } from 'react-toastify';
import '../Styles/Styles.css'

function NavigationBar() {

  function logout(){
    toast.success("Logout Successful")
    localStorage.removeItem('LoggedIn')
    localStorage.removeItem('name')
  }

  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand}>
          <Container fluid>
            <Navbar.Brand className='brand' style={{fontSize: "xxx-large"}} href="/">Memoir</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='brand' id={`offcanvasNavbarLabel-expand-${expand}`}>
                Memoirs
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="App justify-content-end flex-grow-1 pe-3">
                {!localStorage.getItem('LoggedIn') ? <Nav.Link href="/Contact">Join</Nav.Link> : ""}
                {!localStorage.getItem('LoggedIn') ?                         
                  <Button href='/AdminLogin' className='LoginButton'>Login</Button>
                    :
                  <>
                  <Nav.Link href="/AdminHome">Post </Nav.Link>
                  <Button href='/' onClick={logout} className='LoginButton'>Logout</Button>
                  </>
                }
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavigationBar;