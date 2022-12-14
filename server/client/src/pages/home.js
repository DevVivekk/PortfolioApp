import Whats from '../gallery/whatsapp.png'
import React from 'react'
import { FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Vivekk from '../gallery/Vivekk.jpg'
// import {useNavigate} from 'react-router-dom'
function Home() {
  // const navigate = useNavigate();
  const appy = ()=>{
    window.open('/download')
  }
  const whatsapp = ()=>{
    window.open('https://api.whatsapp.com/send?phone=9304898504')
  }

  const maily = ()=>{
    window.open('https://mail.google.com/mail/u/1/?view=cm&fs=1&to=vivekbhardwaj0222@gmail.com&tf=1')
  }
  return (
    <>
    <div className='home'>
        <div className='hero-1' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
        <div className='main-hero1'>
        <img src={Vivekk} style={{"width":"25rem","height":"25rem"}} alt="#img" /><br /><br />
        <h1 style={{"fontFamily": "'Arial', sans-serif"}}>Vivek Bhardwaj (he/him)</h1><br />
        <h2 style={{"fontFamily": "'Open Sans', sans-serif"}}>Web Developer</h2><br /><br /><br />
        <button className='hero-button' onClick={maily}>Email Me</button><br /><br /><br />
        <h1 style={{"wordSpacing":"1rem"}}><FaInstagram /> <FaLinkedinIn /> <FaYoutube /></h1>
        </div>
        </div>

        <div className='hero-2' data-aos="fade-right"
     data-aos-anchor-placement="bottom-bottom">
        <div className='main-hero2'>
          <h1>About Me</h1><br /><br />
          <p className='hero-para' style={{"marginRight":"5rem","wordSpacing":"1rem","lineHeight":"1.8rem","fontSize":"1.1rem"}}>Hello everyone, myself Mr. Vivek Bhardwaj. I'm a full stack web developer(Mern). And also I'm a student
        of Amity University Online as well as IGNOU. First I was doing my graduation in Bsc from CU affiliated College in Kolkata.
          But somehow lost interest in Bsc or you can say that I wasn't enjoying that much in B.sc. I'm only interested in Astronomy and what I was being taught was completely different. So I dropped that college and started pursuing distance education, which turned out to be the best decision. And thats how, I found my way in programming. Thanks to my room mate who helped me a lot in my difficult time.
         <br /><br /><span>"Eat Healthy, Stay Energetic, Read Books, No Toxic Stuffs, Embrace Nature & God and Keep Moving Forward..🚩"</span> 
          </p>
          <div className='button-2' style={{"marginTop":"8rem","marginBottom":"2rem"}}>
          <button className='hero-button-2' onClick={appy} >Resume</button>
          
          <img style={{"width":"4rem","height":"4rem","cursor":"pointer"}} onClick={whatsapp} src={Whats} alt='#img' className='hero-button-3'></img>
          </div>

        </div>
            
        </div>
    </div>

    </>
  )
}

export default Home