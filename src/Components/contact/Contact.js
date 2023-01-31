import React from 'react'
import { Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';
import '../../Styles/Styles.css'
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const navigate = useNavigate();
    const initialValues = {
        name: '',
        email: ''
      }
    
      const validate = values => {
        const errors = {}
        if (!values.name) {
          errors.name = 'name required';
        } else if (values.name.length > 15) {
          errors.name = 'Must be 15 characters or less';
        }
    
        if (!values.email) {
          errors.email = 'email required';
        } else if (values.email.length < 8) {
          errors.email = 'Must be 8 characters or more';
        }

        if (!values.contactNumber) {
            errors.contactNumber = 'email required';
          } else if (values.contactNumber.length < 10) {
            errors.contactNumber = 'Must be 10 numbers';
          }

        return errors;
      }

    function onSubmit() {
        const success = new Promise((resolve,reject) => setTimeout(resolve, 1000));
        toast.promise(
          success,
          {
            pending: 'Please wait',
            success: 'We will get back to you soon!',
            error: 'Login failed🤯'
          }
        )
        setTimeout(() => { navigate("/"); }, 3000);
      }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
      })
  return (
    <div className='mb-2'>
    <center>
      <form onSubmit={formik.handleSubmit} className="card-body cardbody-color p-lg-5">
        <div style={{ marginBottom: '5vh' }} className="text-center">
          <h2 style={{ color: '#8b8dff' }}>Join as a Memoirer</h2>
        </div>

        <div className="mb-3">
          <input type="text" className="form-control" id="name" name="name" placeholder="Name" onChange={formik.handleChange}
            value={formik.values.name}></input>
          {formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" id="email" name="email" placeholder="Email" onChange={formik.handleChange}
            value={formik.values.email}></input>
          {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
        </div>
        <div className="mb-3">
          <input type="number" className="form-control" id="contactNumber" name="contactNumber" placeholder="Phone number" onChange={formik.handleChange}
            value={formik.values.contactNumber}></input>
          {formik.errors.contactNumber ? <div className='error'>{formik.errors.contactNumber}</div> : null}
        </div>
        <div className="text-center">
          <Button type='submit' className='LoginButton'>Submit</Button>
        </div>
      </form>
    </center>
    <ToastContainer transition={Zoom} autoClose={2000} draggable={false} position={toast.POSITION.TOP_CENTER}/>
  </div>
  )
}
