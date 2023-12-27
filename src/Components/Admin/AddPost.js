import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import RichTextEditor from "react-rte";
import axios from "axios";

export default function AddPost(props) {
  const [values, setValues] = useState([])
  const [value, setValue] = useState(RichTextEditor.createEmptyValue())

  const toolbarConfig = {
    display: [
      "INLINE_STYLE_BUTTONS",
      "MONOSPACE_BUTTON",
      "BLOCK_TYPE_BUTTONS",
    ],
    INLINE_STYLE_BUTTONS: [
      { label: "Bold", style: "BOLD", className: "custom-css-class" },
      { label: "Italic", style: "ITALIC" },
      { label: "Underline", style: "UNDERLINE" },
      { label: "Code", style: "CODE" }
    ],


    BLOCK_TYPE_BUTTONS: [
      { label: "UL", style: "unordered-list-item" },
      { label: "OL", style: "ordered-list-item" },
    ]
  };

  const onValueChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onChange = (value) => {
    setValue(value);
    if (props.onChange) {
      props.onChange(value.toString('html'));
    }
  };

  var mydate = new Date();
  var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][mydate.getMonth()];
  var str = mydate.getDate() + ' ' + month + ' ' + mydate.getFullYear();

  const onSubmit = () => {
    axios({
      url: "http://localhost:5000/post",
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
    console.log(values)
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
        <RichTextEditor
          toolbarConfig={toolbarConfig}
          onChange={onChange}
          placeholder="Body"
          value={value}
        />
      </div>

      <div className="submit post">
        <button onClick={() => onSubmit()} className='add-btn'>Update Blog</button>
      </div>

    </div>
  )
}
