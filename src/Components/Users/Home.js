import React, { Component } from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import '../../Styles/Styles.css'
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import DOMPurify from 'dompurify'; 
import Button from 'react-bootstrap/Button';
import { toast, ToastContainer, Zoom } from 'react-toastify';

export default class Home extends Component { 
  constructor(){
    super();
    this.state={
      post:[],
      show: false,
      postNo: [],
      id: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleshowDelClose = this.handleshowDelClose.bind(this)
  }
  componentDidMount(){
    axios({
      url:"http://localhost:5000/",
      method: "get",
    }).then((res)=>{
      this.setState({post: res.data})
    })

  }
  handleClick(e,index, id){
    e.preventDefault();
    this.setState({show: true})
    this.setState({postNo: this.state.post[index]})
    this.setState({id: id})
  }

  delPost(e, postId){
    e.preventDefault();
    axios({
      url:"http://localhost:5000/delPost",
      method: "delete",
      data: {
        id: postId
      }
    }).then((res)=>{
      if(res.data === "post deleted"){
        const success = new Promise((resolve,reject) => setTimeout(resolve, 1000));
        toast.promise(
          success,
          {
            pending: 'Please wait while we log you in',
            success: 'Post deleted successfully',
            error: 'Login failed🤯'
          }
        )
        setTimeout(() => { window.location.reload(); }, 2000);
      }
    })
  }

  handleshowDelClose(){
    this.setState({show: false})
  }

  render() {
    return (
      <div>
      <hr />
        <div className='blogPosts'>
          <h1>All Posts</h1>
          <hr />
          <div className='allposts'>
            {this.state.post.map((p, i) => ( 
              <div className='post'>
              <h2 className='openPost' onClick={(event) => this.handleClick(event, i, p._id)}>{p.title}</h2>
              <h5>{p.date.substr(0,10)}</h5>
              <p>by {p.authorName}</p>
              </div>
            ))}
          </div>
          <Modal size='xl' dialogClassName="my-modal" show={this.state.show} onHide={this.handleshowDelClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.postNo.title} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='post'>          
            <p className='body' dangerouslySetInnerHTML={{__html:  DOMPurify.sanitize(this.state.postNo.body)}}></p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='modelFooter'>
          {localStorage.getItem('LoggedIn') ? <Button href='/' onClick={(event) => this.delPost(event,this.state.id)} 
          className='deleteButton btn-danger'>Delete Post</Button> : "hello"}
            <p>by {this.state.postNo.authorName}</p>
          </div>
        </Modal.Footer>
        </Modal>
        </div>
        <ToastContainer transition={Zoom} autoClose={2000} draggable={false} position={toast.POSITION.TOP_CENTER}/>
      </div>
    )
  }
}
