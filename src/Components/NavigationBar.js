import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { toast } from 'react-toastify';
import '../Styles/Styles.css'

function NavigationBar() {

  return (
    // <>
    //   {['xl'].map((expand) => (
    //     <Navbar key={expand} bg="light" expand={expand}>
    //       <Container fluid>
    //         <Navbar.Brand className='brand' style={{ fontSize: "xxx-large" }} href="/">Memoir</Navbar.Brand>
    //         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
    //         <Navbar.Offcanvas
    //           id={`offcanvasNavbar-expand-${expand}`}
    //           aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
    //           placement="end">
    //           <Offcanvas.Header closeButton>
    //             <Offcanvas.Title className='brand' id={`offcanvasNavbarLabel-expand-${expand}`}>
    //               Memoirs
    //             </Offcanvas.Title>
    //           </Offcanvas.Header>
    //           <Offcanvas.Body>
    //             <Nav className="App justify-content-end flex-grow-1 pe-3">
    //               <Nav.Link href="/AdminHome">Post</Nav.Link>
    //             </Nav>
    //           </Offcanvas.Body>
    //         </Navbar.Offcanvas>
    //       </Container>
    //     </Navbar>
    //   ))}
    // </>

    <div className='navbar'>
      <h1 className='brand'>Memoir</h1>
      <a className='back-btn' href='/AdminHome' style={{textDecoration: 'none'}}>Add Blog</a>
    </div>
  );
}

export default NavigationBar;