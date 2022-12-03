import React from 'react'
import Pin from "../Images/Pin.png"

function Hero(props) {
  return (
    <main>
        <div className='container'>
            <div className='content'>
                <img src={props.image} alt='card'/>
            </div>
            <div className='content2'>
                <img src={Pin} alt='path' className='pin' />
                <span className='county'>{props.country}</span>
                <a href='active'>{props.link}</a>
                <h1 className='title'>{props.location}</h1>
                <h5 className='date'>{props.date}</h5>
                <p className='subtext'>{props.description}</p>
            </div>
        </div>
    </main>
  )
}

export default Hero