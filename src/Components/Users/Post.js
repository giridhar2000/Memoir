import React, { Component } from 'react'
import axios from 'axios';
import DOMPurify from 'dompurify'; 

export default class Post extends Component {
    constructor(){
        super();
        this.state={
          post:[],
          postNo: 0
        }
      }
      componentDidMount(){
        this.setState({postNo: localStorage.getItem('postNo')})
        axios({
          url:"http://localhost:5000/",
          method: "get",
        }).then((res)=>{
          this.setState({post: res.data})
        })
      }
  render() {
    return (
        <div className='allposts'>
        {this.state.post.map((post) => (
          <div className='post'>
          <h2>{post.title[this.state.postNo]}</h2>
          <h5>{post.date[this.state.postNo].substr(0,10)}</h5>
          <p>by {post.authorName[this.state.postNo]}</p>
          <p className='body' dangerouslySetInnerHTML={{__html:  DOMPurify.sanitize(post.body[this.state.postNo])}}></p>
          </div>
        ))}
      </div>
    )
  }
}
