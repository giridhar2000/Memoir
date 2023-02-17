import React from 'react'
import { Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import '../../Styles/Styles.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminLogin() {
  const navigate = useNavigate();
  const initialValues = {
    username: '',
    password: ''
  }

  const validate = values => {
    const errors = {}
    if (!values.username) {
      errors.username = 'username required';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    }

    if (!values.password) {
      errors.password = 'password required';
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters or more';
    }
    return errors;
  }

  async function onSubmit() {
    const postData = {
      name: formik.values.username, 
      pass: formik.values.password
    };
    axios.post("https://memoir-server.onrender.com/login",postData).then((res) => {
      localStorage.setItem('name', res.data.n)
      const success = new Promise((resolve,reject) => setTimeout(resolve, 1000));
      const failed = new Promise((resolve,reject) => setTimeout(reject, 1000));
      if (res.data.isLoggedin === "loginSuccessful") {
        localStorage.setItem('LoggedIn', 1);
        console.log(localStorage.getItem('LoggedIn'))
        toast.promise(
          success,
          {
            pending: 'Please wait while we log you in',
            success: 'Login Successful',
            error: 'Login failed🤯'
          }
        )
        setTimeout(() => { navigate("/AdminHome");window.location.reload(); }, 3000);
      } 
      else{
        toast.promise(
          failed,
          {
            pending: 'Please wait while we log you in',
            success: 'Login Successful',
            error: 'Username or password is incorrect!'
          }
        )
      }
    })
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })

  //#2dafa9
  return (
    <div className='mb-2'>
      <center>
        <form onSubmit={formik.handleSubmit} className="card-body cardbody-color p-lg-5">
          <div style={{ marginBottom: '5vh' }} className="text-center">
            <h2 style={{ color: '#8b8dff' }}>Login as Memoirer</h2>
          </div>

          <div className="mb-3">
            <input type="text" className="form-control" id="Username" name="username" placeholder="Username" onChange={formik.handleChange}
              value={formik.values.username}></input>
            {formik.errors.username ? <div className='error'>{formik.errors.username}</div> : null}
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="password" name="password" placeholder="password" onChange={formik.handleChange}
              value={formik.values.password}></input>
            {formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
          </div>
          <div className="text-center">
            <Button type='submit' className='LoginButton'>Login</Button>
          </div>
        </form>
      </center>
      <ToastContainer transition={Zoom} autoClose={2000} draggable={false} position={toast.POSITION.TOP_CENTER}/>
    </div>
  )
}
