import Hurray from '../gallery/hurray.jpg'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Close from '../gallery/back.png'
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router';
function Page6() {
  const navigate = useNavigate();
  const close = ()=>{
    navigate('/')
  }
  
  let name, value;

const [userr, setUserr] = useState([{name:"",email:"", mobile:"", message:""}])
  const onChange = (e)=>{
    name= e.target.name;
    value = e.target.value;
    setUserr({...userr,[name]:value})
  }
   const fetchApi = async (e) =>{ 
    e.preventDefault();
    const {name,email, mobile, message} = userr;
   const response = await  fetch('/apisubmit',{
    method:"POST",
    headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
   },
   body:JSON.stringify({name,email,mobile,message})
  })
  if(response.status===201){
   window.alert(`Thanks ${name}. We will get in touch with you shortly.`)
  }else if(response.status===401){
    window.alert("All fields are compulsory!!")
  }else if(response.status===402){
    window.alert(`${email} already exists!`)
  }else if(response.status===403){
    window.alert(`${mobile} already exists!`)
  }
  else{
    window.alert('Please recheck your data!')
  }

   }
  return (
    <>
        <div className='page-6'>
            <div className='details' data-aos="zoom-in">
             <h1 style={{"fontSize":"3rem","width":"40rem","marginTop":"3rem","marginLeft":"3rem"}}>Get Your <span style={{"color":"coral"}}>Personal Website</span> in 3 easy steps :-</h1><br />
              <p style={{"fontSize":"3rem","width":"57rem","marginLeft":"3rem","marginTop":"4rem","fontStyle":"italic","fontWeight":"600"}}>1. Submit The Form.</p><br />
              <p style={{"fontSize":"3rem","width":"57rem","marginLeft":"3rem","marginTop":"4rem","fontStyle":"italic","fontWeight":"600"}}>2. Get in Touch.</p><br />
              <p style={{"fontSize":"3rem","width":"57rem","marginLeft":"3rem","marginTop":"4rem","fontStyle":"italic","fontWeight":"600"}}>3. Tell me your customizations and your <span style={{"color":"hotpink"}}>Beautiful Personal website</span> is ready!</p>
              <img src={Hurray} style={{"width":"20rem","height":"20rem","marginLeft":"4rem","marginTop":"3rem"}} alt="#img" />
            </div>
            <div style={{"marginTop":"0rem","textAlign":"center"}} data-aos="zoom-in-up" className='form'>
            <TextField style={{marginTop:"5rem"}} InputLabelProps={{ style: { fontSize: 20 } }}  InputProps={{ style: { fontSize: 25 } }}  size="lg"  id="input-with-icon-textfield" name="name" value={userr.name}  label="Enter Your Name" onChange={onChange} variant="standard" /><br /><br /><br /><br />
            <TextField InputLabelProps={{ style: { fontSize: 20 } }}  InputProps={{ style: { fontSize: 25 } }}  size="lg"  id="input-with-icon-textfield" label="Enter Your Email"  name="email" value={userr.email} variant="standard" onChange={onChange}  /><br /><br /><br /><br />
            <TextField InputLabelProps={{ style: { fontSize: 20 } }}  InputProps={{ style: { fontSize: 25 } }}  size="lg"  id="input-with-sx" label="Enter Your Mobile Number" name="mobile" value={userr.mobile} variant="standard" onChange={onChange}  /><br /><br /><br /><br />
            <TextField InputLabelProps={{ style: { fontSize: 20 } }}  InputProps={{ style: { fontSize: 25 } }}  size="lg"  id="input-with-sx" label="Type Your Message" variant="standard" name="message"  onChange={onChange} value={userr.message} /><br /><br /><br /><br />
            <Button variant="contained" onClick={fetchApi} style={{"marginRight":"20rem"}} size='large'>Submit</Button>
            <div>
              {/* <button style={{"marginTop":"4rem"}} onClick={close}>Close</button> */}
              <img src={Close} onClick={close} alt='#close' style={{"marginTop":"4rem","marginRight":"20rem","width":"3rem","height":"3rem","cursor":"pointer"}} />
            </div>
            </div>
        </div>
    </>
  )
}

export default Page6