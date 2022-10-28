import React,{useState} from 'react'

import logInImage from '../../../assets/images/loginimg.png'
import fkmImage from '../../../assets/images/fkm_cover.png'
import {Box,Button, Typography,TextField,Divider, Alert} from '@mui/material';
import {Link} from "react-router-dom"



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [callWarning, SetCallWarning] = useState(false)
   
    const [emailErr, setEmailErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false);



    const onSubmit=(e)=>{
      e.preventDefault();
      if(email.length < 4 || password.length < 6 ){
        SetCallWarning(true)
      }else{
        console.log(`email = ${email} , password = ${password}`)
        setEmail("");
        setPassword("");

      }
       
    }

    const emailChangeHandler =(e)=>{
      const item = e.target.value
       let emailRegex =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(item.length < 4 || (emailRegex.test(item) == false)){
        setEmailErr(true)
        setEmail("");
        
      }else{
        setEmailErr(false)
      }
      setEmail(item)
      SetCallWarning(false)
     }
     const passwordChangeHandler =(e)=>{
      const item = e.target.value
      if(item.length < 6){
        setPasswordErr(true)
        setPassword("");
      }else{
        setPasswordErr(false)
      
      }
      setPassword(item)
      SetCallWarning(false)
      }


  return (
    <div style={{paddingTop:"56px"}}>
        <Box component="div" style={{width:"100%"}}>
            <img src={logInImage} alt='LogIn ' style={{width:"100%"}}></img>
        </Box>
        <Box component="div" style={{width:"100%", padding:" 5px 20px"}}>
            <Typography variant="h5" component="h5" ><strong style={{fontWeight:"800"}}>LogIn</strong></Typography>
             <form  onSubmit={onSubmit}>
             <TextField 
             sx={{width:"100%",marginTop:"10px"}}
             
              size="small"
              id="email"
              value={email}
              onChange={emailChangeHandler}
              type="text"
              label="Email ID"
              variant="outlined" />
             <p style={{color:"#f27935", paddingLeft:"5px"}}>{emailErr?"Please Enter Valid Email":""}</p>
            <TextField 
              sx={{width:"100%",marginTop:"10px"}}
              id="password"
              value={password}
              onChange={passwordChangeHandler}
              type="password"
              size="small"
              name="password"
              label="Password"
              variant="outlined" />
                <p style={{color:"#f27935" , paddingLeft:"5px"}}>{passwordErr?"Please Enter Strong Password":""}</p>
               <Box component="div" style={{width:"100%", padding:" 10px 0", textAlign:"right"}}> <Link style={{color:"#4343e9", fontWeight:"bold",textDecoration:"none"}} to="/forgot-password">Forgot Password ?</Link></Box>
               <Button variant="contained" sx={{width:"100%", color:"#fff", fontWeight:"bold", margin:"10px 0"}} type='submit'>LogIn</Button>
               {
                  callWarning? <Alert severity="warning">Please fill out the form  </Alert>: ""
               }
             </form>
             <Divider textAlign="center">OR</Divider>
             <Box component="div" sx={{ p: 1,}}>
              <Button  variant="contained" sx={{width:"100%", bgcolor:"#f2793552", marginBottom:"15px"}} > <Link to="/" style={{color:"#000",textDecoration:"none"}}><img src={fkmImage} style={{width:"100px"}} alt='Google'></img> <span>Login With Google</span></Link>  </Button>
              <Button variant="contained" sx={{width:"100%", bgcolor:"#f2793552",marginBottom:"15px" }} > <Link to="/" style={{color:"#000",textDecoration:"none"}}><img src={fkmImage} style={{width:"100px"}} alt='Google'></img> <span>Login With Facebook</span></Link>  </Button>
             </Box>
             <Box component="div" sx={{ p: 1,}}>
              <Button sx={{width:"100%",marginBottom:"5px" ,color:"gray", textTransform:"capitalize" }} >New To FreeKaaMaal ? <Link to="/sign-up" style={{color:"#4343e9",textDecoration:"none", fontWeight:"500"}}>&nbsp; Register</Link></Button>
             </Box>
        </Box>
      
    </div>
  )
}

export default Login
