import React, { Component } from "react";
import RichTextEditor from "react-rte";
import { Button } from 'react-bootstrap'
import '../../Styles/Styles.css'
import axios from "axios";
import { toast } from "react-toastify";

export default class AddPost extends Component {
  constructor() {
    super();

    var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    this.state = {
        date: date,
        title: "",
        value: RichTextEditor.createEmptyValue()
    };
}
  onChange = (value) => {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(value.toString("html"));
    }

  };

  onTitleChange = (e) => {
    this.setState({title: e.target.value})
  }

  onSubmit = () => {
    axios({
      url: "https://memoir-server.onrender.com/post",
      method: "post",
      data: {
        title: this.state.title,
        body: this.state.value.toString("html"),
        authorName: localStorage.getItem('name'),
        PostedDate: this.state.date
      }
    }).then((res)=>{
      if(res.data.Posted === true){
        toast.success("Successfully posted")
        setTimeout(()=>window.location.reload(),3000)
      }
      if(res.data.Posted === false){
        toast.error("Post failed")
      }
    })
    console.log(this.state.value.toString("html") + "title:"+ this.state.title)
  }

  render() {
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
    return (
      <div className="container">
      <input type="text" className="form-control" id="title" placeholder="Title" onChange={this.onTitleChange}value={this.state.title} required={true}></input>
      <br />
      <RichTextEditor
        toolbarConfig={toolbarConfig}
        value={this.state.value}
        onChange={this.onChange}
        placeholder="Body"
      />
      <br />
      <Button onClick={this.onSubmit} className='LoginButton'>POST</Button>
      </div>
    );
  }
}
