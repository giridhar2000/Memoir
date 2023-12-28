import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";

export default function AddPost(props) {
  const [values, setValues] = useState([])
  const [value, setValue] = useState('')

  const onValueChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  var mydate = new Date();
  var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][mydate.getMonth()];
  var str = mydate.getDate() + ' ' + month + ' ' + mydate.getFullYear();

  const onSubmit = () => {
    axios({
      url: "https://memoir-server.onrender.com/post",
      method: "post",
      data: {
        title: values.title,
        subtitle: values.subtitle,
        body: value,
        authorName: values.authorName,
        authorProfile: values.authorProfile,
        coverPic: values.coverImg,
        PostedDate: str
      }
    }).then((res) => {
      if (res.data.Posted === true) {
        toast.success("Successfully posted")
        setTimeout(() => window.location.reload(), 3000)
      }
      if (res.data.Posted === false) {
        toast.error("Post failed")
      }
    })
  }

  return (
    <div className="add-post">
      <div className="title post">
        <label htmlFor='title'>Title: </label>
        <textarea type='text' placeholder='Enter Title' name="title" onChange={(e) => onValueChange(e)} />
      </div>

      <div className="subtitle post">
        <label htmlFor='subtitle'>Subtitle (should be less than 30 words):</label>
        <textarea type='text' placeholder='Enter Subtitle' name="subtitle" onChange={(e) => onValueChange(e)} />
      </div>

      <div className="authorName post">
        <label htmlFor='authorName'>Author Name (optional) :</label>
        <textarea type='text' placeholder='Enter Author Name' name="authorName" onChange={(e) => onValueChange(e)} />
      </div>

      <div className="authorProfile post">
        <label htmlFor='authorProfile'>Author Profile Link (optional) :</label>
        <textarea type='text' placeholder='Enter Author Profile Link' name="authorProfile" onChange={(e) => onValueChange(e)} />
      </div>

      <div className="coverImg post">
        <label htmlFor='coverImg'>Author Profile Link (optional) :</label>
        <input type='file' accept="image/png, image/jpeg" name="coverImg" onChange={(e) => onValueChange(e)} />
      </div>

      <div className="richtexteditor">
        <ReactQuill theme='snow' value={value} onChange={setValue} placeholder={'Enter Body'}/>
      </div>

      <div className="submit post">
        <button onClick={() => onSubmit()} className='add-btn'>Update Blog</button>
      </div>

    </div>
  )
}
