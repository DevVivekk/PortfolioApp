import React from 'react'
import Karthik from '../gallery/random.jpg'
import Sneha from '../gallery/sweta.jpg'
import Aditya from '../gallery/aditya.jpg'

function Page3() {
  return (
    <>
        <div id="testis" className='page-3'>
            <div className='testimonials'>
            <h1 style={{"fontSize":"4rem","display":"inline-block","width":"0rem","marginTop":"4rem"}}>Client Testimonials</h1>
            </div>
            <div className='testis-data'>
            <div className='boxs-1' data-aos="flip-up">
            <div style={{"height":"10rem"}} className='box-contents-1'>
              <img src={Karthik} alt='#img' style={{"width":"10rem","height":"10rem","borderRadius":"35%","padding":"2rem"}} />
              <p style={{"fontFamily":"'Lato', sans-serif","fontSize":"1.4rem","wordSpacing":"1px","lineHeight":"1.4rem","width":"25rem","height":"10rem","marginTop":"4rem","overflow":"auto"}}>Hi I'm Karthik. Im happy to have my own website..</p>
              </div>
              <div style={{"marginLeft":"15rem","marginBottom":"1rem"}} className='box-contents-2'>
              <h2>- Karthik Singh</h2>
              </div>
            </div>
            <div className='boxs-1' data-aos="flip-up">
            <div style={{"height":"10rem"}} className='box-contents-1'>
              <img src={Aditya} alt='#img' style={{"width":"10rem","height":"10rem","borderRadius":"35%","padding":"2rem"}} />
              <p style={{"fontFamily":"'Lato', sans-serif","fontSize":"1.4rem","wordSpacing":"1px","lineHeight":"1.4rem","width":"25rem","height":"10rem","marginTop":"4rem","overflow":"auto"}}>Loved this beautiful website..😍 Recommended to all of you. </p>
              </div>
              <div style={{"marginLeft":"15rem","marginBottom":"1rem"}} className='box-contents-2'>
              <h2>- Aditya Patel</h2>
              </div>
            </div>
            <div className='boxs-1' data-aos="flip-down">
            <div style={{"height":"10rem"}} className='box-contents-1'>
              <img src={Sneha} alt='#img' style={{"width":"10rem","height":"10rem","borderRadius":"35%","padding":"2rem"}} />
              <p style={{"fontFamily":"'Lato', sans-serif","fontSize":"1.4rem","wordSpacing":"1px","lineHeight":"1.4rem","width":"25rem","height":"10rem","marginTop":"4rem","overflow":"auto"}}>Damn cool and next level responsive website. Highly impressesd! 😘</p>
              </div>
              <div style={{"marginLeft":"15rem","marginBottom":"1rem"}} className='box-contents-2'>
              <h2>- Sneha Das</h2>
              </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Page3