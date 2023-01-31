import React from 'react';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput,
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap'

export default function Footer() {

  function subscribe() {
    const success = new Promise((resolve,reject) => setTimeout(resolve, 1000));
    toast.promise(
      success,
      {
        pending: 'Please wait',
        success: 'Subscribed!',
        error: 'Login failed🤯'
      }
    )
    setTimeout(() => { window.location.reload() }, 3000);
  }

  return (
    <MDBFooter bg='light' className='bottom text-center text-lg-left'>
        <hr />
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput type='text' id='form5Example2' placeholder='Email address' />
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
            <Button className='LoginButton' onClick={()=> subscribe()}>Subscribe</Button>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <div className='text-center p-3'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='/'>
          Mermoir.com
        </a>
      </div>
      <ToastContainer transition={Zoom} autoClose={2000} draggable={false} position={toast.POSITION.TOP_CENTER}/>
    </MDBFooter>
    
  );
}