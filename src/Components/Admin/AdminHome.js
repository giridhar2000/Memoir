import React, { Component } from 'react'
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddPost from './AddPost';

export default class AdminHome extends Component {
  componentDidMount() {
    console.log(localStorage.getItem('LoggedIn'))
  }

  render() {
    return (
      <div className='container'>
        <ToastContainer transition={Zoom} autoClose={2000} draggable={false} position={toast.POSITION.TOP_CENTER} />
        <div className='home-head'>
          <button className='back-btn' onClick={()=>window.location.replace('/')}>Go Back</button>
          {/* <h1>Welcome {localStorage.getItem('name')}</h1> */}
        </div>
        <h2 style={{fontWeight: "600"}}>Add Blog</h2>
        <AddPost />
      </div>
    )
  }
}
