import React from 'react'
import '../PostCards/PostCards.css'
import { useNavigate } from 'react-router-dom'

export default function PostCards(props) {
    const navigate = useNavigate();
    const readblog = () => {
        localStorage.setItem('postNo', props.postNo);
        navigate('/blogpost')
    }
    return (
        <div className='post-cards' style={{ backgroundImage: `url(${props.pic}), linear-gradient(to top, black, transparent)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className='post-cards-body'>
                <div className='post-cards-preview'>
                    <div className='post-cards-title'>
                        {props.title}
                    </div>
                    <div className='post-cards-header'>
                        {props.header}
                    </div>
                </div>

                <div className='post-cards-full'>
                    <div className='post-cards-full-body'>
                        <p className='body'>{props.subtitle}</p>
                    </div>
                    <div className='post-cards-full-footer'>
                        <div className='date'>
                            {props.date}
                        </div>
                        <div className='author'>
                            <button onClick={readblog} className='read-btn'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
