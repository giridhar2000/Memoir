import React, { useEffect, useState } from 'react'
import DOMPurify from 'dompurify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function BlogPost() {
    const navigate = useNavigate()
    const id = localStorage.getItem('postNo')
    const [data, setData] = useState([])
    useEffect(()=>{
        axios({
            url: "https://memoir-server.onrender.com/getblog",
            method: "post",
            data: {
                id: id
            }
          }).then((res) => {
            setData(res.data.body)
            console.log(res.data.body)
          })
    }, [id])

    const goback = () => {
        navigate('/')
    }

    return (
        <div className='blogpost'>
            <button className='back-btn' onClick={goback}>Back</button>
            <span className='blogspan' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data) }}></span>
        </div>
    )
}
