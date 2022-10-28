import React,{useState} from 'react'
import logInImage from '../../../assets/images/loginimg.png'
import { useNavigate } from "react-router-dom";

import {Box,Button, Typography,TextField} from '@mui/material';

const ForgotPassword = () => {
    const [forgotPassword, setForgotPassword] = useState("");
    const [email_Mobile_Err, setEmail_Mobile_Err] = useState(false);
    const navigate = useNavigate()
    const onSubmit=(e)=>{
        e.preventDefault();
        // console.log(`email = ${forgotPassword}`)
        setTimeout(()=>{
            setForgotPassword("");
            // navigate("/enter-otp")
        },1000)
        
      
    }
    
   
    const forgotPasswordChangeHandler =(e)=>{

        setForgotPassword(e.target.value)
    }
   
  return (
    <div style={{paddingTop:"56px"}}>
        <Box component="div" style={{width:"100%"}}>
            <img src={logInImage} alt='LogIn ' style={{width:"100%"}}></img>
        </Box>
        <Box component="div" style={{width:"100%", padding:" 5px 20px"}}>
            <Typography variant="h5" component="h5" ><strong style={{fontWeight:"800"}}>Forgot Password</strong></Typography>
            <Typography variant="body1" component="p"> Don't worry ! It happens. Please enter the address Associated with your acount.</Typography>
             <form style={{paddingTop:"30px"}}  onSubmit={onSubmit}>
             <TextField 
             sx={{width:"100%",marginTop:"10px"}}
              size="small"
              id="forgotPassword"
              value={forgotPassword}
              onChange={forgotPasswordChangeHandler}
              type="text"
              label="Email ID / Mobile Number"
              variant="outlined" />
              {
               <p style={{color:"#f27935", paddingLeft:"5px"}}>{email_Mobile_Err?"Please Enter Valid Name":""}</p>
              }
               <Button variant="contained" sx={{width:"100%", color:"#fff", fontWeight:"bold", margin:"20px 0"}} type='submit'>Submit</Button>
             </form>
        </Box>
      
    </div>
  )
}

export default ForgotPassword
