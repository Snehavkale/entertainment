import React from 'react'
import "./header.css"
const Header = () => {
  return (
    <>
     <div>
        <h2 className='Htitle' onClick={()=> window.scroll(0,0)}>  🎬 Entertainment Hub 🎥</h2>
     </div>
    </>
  )
}

export default Header
