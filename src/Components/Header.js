import React from 'react'
import Globe from "../Images/Globe.png"
import "../App.css"

function Header() {
  return (
    <div>
        <nav>
            <img src={Globe} alt='earth' className='logo'/>
            <p className='text'>my travel journal.</p>
        </nav>
    </div>
  )
}

export default Header