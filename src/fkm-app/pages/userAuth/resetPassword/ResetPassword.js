import React,{useState} from 'react'
import logInImage from '../../../assets/images/loginimg.png'
import { useNavigate } from "react-router-dom";

import {Box,Button, Typography,TextField} from '@mui/material';
const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [conformPassword, setConformPassword] = useState("");
    const navigate = useNavigate()
    const onSubmit=(e)=>{
        e.preventDefault();
         console.log(`New Password = ${newPassword}, Conform Password =${conformPassword}`)
        setTimeout(()=>{
            setNewPassword("");
            setConformPassword("")
            navigate("/")
        },1000)
        
    }
    
    const newPasswordChangeHandler =(e)=>{
        setNewPassword(e.target.value)
    }
    const conformPasswordChangeHandler =(e)=>{
        setConformPassword(e.target.value)
    }
  return (
    <div style={{paddingTop:"56px"}}>
    <Box component="div" style={{width:"100%"}}>
        <img src={logInImage} alt='LogIn ' style={{width:"100%"}}></img>
    </Box>
    <Box component="div" style={{width:"100%", padding:" 5px 20px"}}>
        <Typography variant="h5" component="h5" ><strong style={{fontWeight:"800"}}>Reset Password</strong></Typography>
        <Typography variant="body1" component="p"> Don't worry ! It happens. Please enter the address Associated with your acount.</Typography>
         <form style={{paddingTop:"30px"}}  onSubmit={onSubmit}>
         <TextField 
          sx={{width:"100%",marginTop:"10px"}}
          size="small"
          id="newPassword"
          value={newPassword}
          onChange={newPasswordChangeHandler}
          type="text"
          label="New Password"
          variant="outlined" />

           <TextField 
          sx={{width:"100%",marginTop:"10px"}}
          size="small"
          id="conformPassword"
          value={conformPassword}
          onChange={conformPasswordChangeHandler}
          type="text"
          label="Conform Password"
          variant="outlined" />
           <Button variant="contained" sx={{width:"100%", color:"#fff", fontWeight:"bold", margin:"20px 0"}} type='submit'>Submit</Button>
         </form>
    </Box>
  
</div>
  )
}

export default ResetPassword
