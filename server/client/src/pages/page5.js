import React from 'react'
import Vivekkk from '../gallery/imgresume.png.png'
import {NavHashLink as Link} from 'react-router-hash-link'
import {useNavigate} from 'react-router-dom'
function Page5() {
   const navigate = useNavigate();
   const buy = ()=>{
   navigate('/buynow')
   }
  return (
    <>
        <div className='page-5'>
            <div style={{"backgroundColor":"lightyellow","height":"auto"}} data-aos="fade-right" className='page-5-box'>
            <h1 style={{"marginLeft":"4rem","fontSize":"6rem","width":"50rem","lineHeight":"7rem","marginTop":"7rem"}}>Want This <span style={{"color":"hotpink"}}>Beautiful</span> Personal Website with some <span style={{"color":"coral"}}>customizations</span>?</h1>
            <p style={{"fontSize":"3rem","width":"57rem","marginLeft":"3rem","marginTop":"4rem","fontStyle":"italic","fontWeight":"500"}}>This modern responsive website can be all Yours in just <span style={{"textDecoration":"line-through","color":"red","fontWeight":"400"}}>$29</span>  <span style={{"color":"green","fontWeight":"600","fontSize":"4rem"}}>$9</span> <span>. Grab it Now!🤩</span></p>
            <h1><Link smooth to="#testis" style={{"marginTop":"3.5rem","backgroundColor":"white","width":"12","height":"4rem","textDecoration":"none","paddingTop":"1.1rem","textAlign":"center","display":"inline-block","fontFamily":"'Nerko One'","color":"black","marginBottom":"4rem"}} className='button-page5'>Read Reviews </Link></h1>
            </div>
            <div style={{"height":"auto"}} className='page-5-box' data-aos="fade-right">
            <img src={Vivekkk} style={{"width":"50rem"}} alt='#img' />
            <h1 style={{"fontSize":"4.5rem","textAlign":"center","width":"50rem","color":"whitesmoke"}}>THE <span style={{"color":"black"}}>BLACK FRIDAY</span> SALE IS ON!!!</h1>
            <button style={{"backgroundColor":"green","color":"white","border":"0px solid green","marginBottom":"2rem"}} className='button-page5' onClick={()=>buy()}>Buy Now</button>
            </div>
        </div>
    </>
  )
}

export default Page5