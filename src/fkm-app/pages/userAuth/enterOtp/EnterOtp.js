import React,{useState} from 'react'
import logInImage from '../../../assets/images/loginimg.png'
import { useNavigate } from "react-router-dom";
import OTPInput, { ResendOTP } from "otp-input-react";
import {Box,Button, Typography} from '@mui/material';


const EnterOtp = () => {
    const [OTP, setOTP] = useState("");

    const navigate = useNavigate()

    const onSubmit=(e)=>{
        e.preventDefault();
        setTimeout(()=>{
            setOTP(" ")
            navigate("/reset-password")
        },1000)
    }
    
  
  
   const sendMobileNumber = "+91 1122334455"
  return (
    <div style={{paddingTop:"56px"}}>
        <Box component="div" style={{width:"100%"}}>
            <img src={logInImage} alt='LogIn ' style={{width:"100%"}}></img>
        </Box>
        <Box component="div" style={{width:"100%", padding:" 5px 20px"}}>
            <Typography variant="h5" component="h5" ><strong style={{fontWeight:"800"}}>Enter OTP</strong></Typography>
            <Typography variant="body1" component="p" sx={{padding:"5px 0"}}>An 6 digit code has been sand to</Typography>
            <Typography variant="body1" component="p"><strong>{sendMobileNumber}</strong></Typography>
             <form className='enter_otp_component'  style={{paddingTop:"30px"}}  onSubmit={onSubmit}>
             <OTPInput
                value={OTP}
                inputClassName="input_otp_box"
                onChange={setOTP}
                autoFocus
                OTPLength={6}
                timeInterval="120"
                otpType="number"
                disabled={false}
                />
                <ResendOTP handelResendClick={() => console.log("Resend clicked")} /> 
               <Button variant="contained" sx={{width:"100%", color:"#fff", fontWeight:"bold", margin:"20px 0"}} type='submit'>Submit</Button>
             </form>
        </Box>
      
    </div>
  )
}

export default EnterOtp
