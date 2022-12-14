import React from 'react'
import {useNavigate} from 'react-router'
import Close from '../gallery/back.png'
function Resume() {
  const navigate = useNavigate();
  const close = ()=>{
    navigate('/')
  }
  return (
    <>  <div className='page-8'>
        <div className='resume'>
        <h1 style={{"fontSize":"2.5rem","marginTop":"2rem"}}>Select and drop your resume.</h1>
        <h2 style={{"fontSize":"1.5rem","fontFamily":"'PT Serif', serif"}}>You are just one step away..</h2>
        <p style={{"fontSize":"1.2rem"}}>Email : vivekbhardwaj0222@gmail.com</p>
        <img src={Close} onClick={close} alt='#close' style={{"marginTop":"4rem","marginRight":"20rem","width":"3rem","height":"3rem","cursor":"pointer"}} />
    
            </div>
        </div>


    </>
  )
}

export default Resume