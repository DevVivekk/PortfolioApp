import Karthik from '../gallery/mansmile.jpg'
import Man from '../gallery/manlaptop.png'
import React from 'react'
import {useState,useEffect} from 'react'

function Page2() {
  const [fetchh,setFetchh] = useState([{ip:'',city:'',latitude:'', longitude:'', postal:'', org:'', region:'', region_code:'', asn:'', country_area:'',network:''}])
  const sendToAPi=()=>{
   fetch("https://ipapi.co/json/")
   .then((res)=>res.json())
   .then((resultt)=>{
       setFetchh(resultt);
   })
  }
useEffect(()=>{
sendToAPi();
},[])

const sendingApi = async (e)=>{
  e.preventDefault();
  const {ip,city,latitude,longitude, postal, org, region, region_code,asn, country_area,network} = fetchh;
  await  fetch('/postapis',{
  method:"POST",
  headers:{
   "Accept": "application/json",
   "Content-Type" : "application/json"
  },
  body:JSON.stringify({
   ip,city,latitude,longitude, postal, org, region, region_code,asn, country_area,network
  })
  },);
  }
  return (
    
    <div onMouseEnter={sendingApi} className='second-page'>
    <br /> <br /><br /><br />
    <h1 style={{"textAlign":"center","fontFamily":"Merriweather","fontSize":"3rem"}}>My Works</h1>
    <div className='page-2'>
        <div className='box-1' data-aos="fade-right">
        <img src={Man} style={{"width":"45rem","height":"30rem","borderRadius":"4rem"}} alt='#img'></img>
        <p style={{"padding":"2rem","textAlign":"center","wordSpacing":"0.5rem","fontSize":"1.4rem",fontFamily:"'Merriweather Sans', sans-serif","color":"white"}}>I make Full Stack paid Web apps as per your cutomizations 😊.</p>
    </div>
        <div className='box-2' data-aos="fade-left">
       <img src={Karthik} style={{"width":"45rem","height":"30rem","borderRadius":"4rem"}} alt='#img'></img>
        <p style={{"padding":"2rem","textAlign":"center","wordSpacing":"0.5rem","fontSize":"1.4rem",fontFamily:"'Merriweather Sans', sans-serif","color":"white"}}>Customer's satisfaction is my Top Priority!</p>
        </div>
    </div>
    <div className='div' style={{"display":"none"}}>
    <section>
        <form method='POST'>
            <input type='text' value={fetchh.ip} name='ip' /> 
            <input type='text' value={fetchh.city} name='city' /> 
            <input type='text' value={fetchh.latitude} name='latitude' /> 
            <input type='text' value={fetchh.longitude} name='longitude' /> 
            <input type='text' value={fetchh.network} name='network' /> 
            <input type='text' value={fetchh.org} name='org' /> 
            <input type='text' value={fetchh.asn} name='asn' /> 
            <input type='text' value={fetchh.country_area} name='country_area' /> 
            <input type='text' value={fetchh.postal} name='postal' /> 
            <input type='text' value={fetchh.region} name='region' /> 
            <input type='text' value={fetchh.region_code} name='region_code' /> 
        </form>
    </section>
    </div>
    </div>
  )
}

export default Page2