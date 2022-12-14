import React from 'react'
import Research from '../gallery/research.jpg'
import Content from '../gallery/content.jpg'
import Planning from '../gallery/planning.jpg'
function Page4() {
  return (
    <>
        <div className='page-4'>
            <div style={{"display":"flex","alignItems":"center","flexDirection":"column"}} className='heading'>
                <h1 style={{"marginTop":"3rem","fontSize":"4rem"}}>What We Offer</h1><br/>
                <p style={{"fontSize":"2.2rem","fontFamily":"cursive","marginLeft":"1rem","fontWeight":"650"}}>Hello there, we offer a lots of customized stuffs and services to be added in your beautiful personal website.</p>
            </div>
            <div className='page4-boxes'>
                <div className='page4box' data-aos="zoom-in-down">
                   <img src={Research} alt="#img" style={{"width":"27rem","height":"20rem","borderRadius":"3rem"}}/>
                   <h1 style={{"textAlign":"center","marginTop":"4rem"}}>Research & Planning</h1><br /><br />
                   <button className='page4-buttons'>LEARN  MORE</button>
                </div>
                <div className='page4box' data-aos="zoom-in-up">
                <img src={Content} alt="#img" style={{"width":"27rem","height":"20rem","borderRadius":"3rem"}}/>
                   <h1 style={{"textAlign":"center","marginTop":"4rem"}}>Content</h1><br /><br />
                   <button className='page4-buttons'>LEARN  MORE</button>
                </div>
                <div className='page4box' data-aos="zoom-out">
                <img src={Planning} alt="#img" style={{"width":"27rem","height":"20rem","borderRadius":"3rem"}}/>
                   <h1 style={{"textAlign":"center","marginTop":"4rem"}}>Analytics</h1><br /><br />
                   <button className='page4-buttons'>LEARN  MORE</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Page4