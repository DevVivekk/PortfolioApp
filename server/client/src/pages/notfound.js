import React from 'react'
import Close from '../gallery/back.png'
import Not from '../gallery/notfound.jpg'
import {useNavigate} from 'react-router'

function Notfound() {
    const navigate = useNavigate();
    const close = ()=>{
      navigate('/')
    }
  return (
    <>
        <div style={{"width":"100vw","height":"100vh","display":"flex","flexDirection":"column","alignItems":"center","flexWrap":"wrap"}} className='not-found'>
            <h1 style={{"fontSize":"3rem","marginTop":"5rem","marginRight":"1rem"}}>Oops! The page you are looking for is not there.</h1>
            <img src={Not} alt='#error' style={{"width":"3orem","height":"30rem","marginTop":"10rem","marginBottom":"5rem"}} />
            <p style={{"fontFamily":"cursive","fontSize":"1.5rem"}}>Thanks for visting.........</p>
            <img src={Close} onClick={close} alt='#close' style={{"marginTop":"3rem","width":"3rem","height":"3rem","cursor":"pointer"}} />
        </div>
    </>
  )
}

export default Notfound