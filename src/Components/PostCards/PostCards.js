import React from 'react'
import '../PostCards/PostCards.css'
import DOMPurify from 'dompurify';

export default function PostCards(props) {
    return (
        <>
            {/* {props.map((value, index) => { */}
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
                            {/* <p className='body' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.body) }}></p> */}
                            <p className='body'>{props.subtitle}</p>
                        </div>
                        <div className='post-cards-full-footer'>
                            <div className='date'>
                                {props.date}
                            </div>
                            <div className='author'>
                                <a href='/'>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* })} */}
        </>
    )
}
