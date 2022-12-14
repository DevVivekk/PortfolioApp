import React from 'react'
import {NavLink} from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className='footer'>
        <ul style={{"lineHeight":"4rem","paddingTop":"2rem"}}>
          <li style={{"listStyleType":"none","fontSize":"1.5rem"}}><NavLink className='links' to='/contact'>Contact</NavLink></li> 
           <li style={{"listStyleType":"none","fontSize":"1.5rem"}}><NavLink className='links' to='/copyright'>Copyright</NavLink></li>
           <li style={{"listStyleType":"none","fontSize":"1.5rem"}} ><NavLink className='links' to='/Github'>Git Hub</NavLink></li>
           </ul>
        </div>
    </>
  )
}

export default Footer