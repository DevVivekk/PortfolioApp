import React from 'react'
import {useNavigate} from 'react-router'
import Contact1 from '../gallery/contact1.jpg'
import Team from '../gallery/team.jpg'
import Close from '../gallery/back.png'
function Contact() {
  const navigate = useNavigate();
  const close = ()=>{
    navigate('/')
  }
  const resume = ()=>{
    navigate('/resumeupload')
  }
  return (
    <>
        <div className='contact'>
            <div className='item1'>
            <img src={Contact1} alt='#img' style={{"width":"60rem","height":"35rem","borderRadius":"3rem"}} />
            <h1 style={{"fontSize":"5rem","fontFamily":"'Taviraj', serif","color":" rgb(57, 61, 63)","lineHeight":"5.5rem","marginLeft":"1rem","marginTop":"2rem"}}>Want to work with my team?</h1>
            </div>
            
            <div className='item1'>
            <img src={Team} alt='#img' style={{"width":"60rem","height":"35rem","borderRadius":"3rem","marginTop":"5.9rem"}} />
            <p style={{"color":"rgb(62, 65, 67)","wordSpacing":"0.6rem","fontSize":"2rem","fontWeight":"600","fontFamily":"'Roboto', sans-serif","marginLeft":"1rem","marginTop":"4rem","marginBottom":"3rem"}}>We are looking for a experienced web developer. If your are a frontend/ backend/ full stack expert. Drop your resume here 👇.</p>
            <button style={{"width":"15rem","height":"4rem","backgroundColor":"white","borderRadius":"3rem","cursor":"pointer"}} onClick={resume}>Submit Resume</button>
            <img  src={Close} onClick={close} alt='#close' style={{"marginTop":"3rem","width":"3rem","height":"3rem","cursor":"pointer","float":"left"}} />
            </div>
          
        </div>
    </>
  )
}

export default Contact