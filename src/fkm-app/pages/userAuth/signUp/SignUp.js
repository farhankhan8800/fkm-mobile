import React,{useState} from 'react'

import logInImage from '../../../assets/images/loginimg.png'
 // import fkmImage from '../../../assets/images/fkm_cover.png'
import {Box,Button, Typography,TextField, Grid,Alert} from '@mui/material';
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [mobile, setMobile] = useState("");

    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [userNameErr, setUserNameErr] = useState(false);
    const [mobileErr, setMobileErr] = useState(false);

    const [callWarning, SetCallWarning] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false);

    const navigate = useNavigate()
    const onSubmit=(e)=>{
        e.preventDefault();
        if(email.length < 4 || password.length < 6 || userName.length < 3 || mobile.length < 9){
         SetCallWarning(true)
        }else{
             console.log(`email = ${email} , password = ${password} , name = ${userName}, mobile = ${mobile}`)
            setEmail("");
            setPassword("");
            setUserName("");
            setMobile("");

            setTimeout(()=>{
              setShowSignUp(true)
            },1000)
            setTimeout(()=>{
              navigate("/login")
            },3000)
        }
    }


    const userNameChangeHandler =(e)=>{
      const item = e.target.value
      let nameRegex = /^[a-zA-Z]*$/
      if(item.length < 3 || (nameRegex.test(item) == false)){
        setUserNameErr(true)
        setUserName("");
      }else{
        setUserNameErr(false)
      }
       setUserName(item)
    }


    const mobileChangeHandler =(e)=>{
      const item = e.target.value
      if(item.length < 9){
        setMobileErr(true)
        setMobile("");
      }else{
        setMobileErr(false)
      }
         setMobile(item)
       
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
     setPassword(e.target.value)
    }


  return (
    <div style={{paddingTop:"56px"}}>
    <Box component="div" style={{width:"100%"}}>
        <img src={logInImage} alt='LogIn ' style={{width:"100%"}}></img>
    </Box>
    <Box component="div" style={{width:"100%", padding:" 5px 20px"}}>
        <Typography variant="h5" component="h5" ><strong style={{fontWeight:"800"}}>Sign Up & Earn</strong></Typography>
        
         <form  onSubmit={onSubmit}>
         <TextField 
         sx={{width:"100%",marginTop:"10px"}}
          size="small"
          id="name"
          value={userName}
          onChange={userNameChangeHandler}
          type="text"
          label="Name"
          variant="outlined" />
           <p style={{color:"#f27935", paddingLeft:"5px"}}>{userNameErr?"Please Enter Valid Name":""}</p>
         <TextField 
         sx={{width:"100%",marginTop:"10px"}}
         
          size="small"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          type="type"
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
          <p style={{color:"#f27935", paddingLeft:"5px"}}>{passwordErr?"Please Enter Valid Email":""}</p>
          <TextField 
          sx={{width:"100%",marginTop:"10px"}}
          id="mobile"
          value={mobile}
          onChange={mobileChangeHandler}
          type="number"
          size="small"
          name="mobile"
          label="Mobile No."
          variant="outlined" />
           <p style={{color:"#f27935", paddingLeft:"5px"}}>{mobileErr?"Please Enter Valid Email":""}</p>
       {
         showSignUp?<Button variant="contained" disabled sx={{width:"100%", color:"#fff", fontWeight:"bold", margin:"20px 0 10px 0"}} type='submit'>Sign Up</Button>:<Button variant="contained" sx={{width:"100%", color:"#fff", fontWeight:"bold", margin:"20px 0 10px 0"}} type='submit'>Sign Up</Button>
       }
           

         </form>
         <Box component="div" sx={{padding:"10px 0"}}>
          {
            showSignUp?<Alert sx={{marginBottom:"10px"}} severity="success">You Have Successfully SignUp</Alert>: ""
          }
          {
                  callWarning? <Alert severity="warning">Please fill out the form  </Alert>: ""
          }
          <Button sx={{width:"100%",marginBottom:"5px" ,color:"gray", textTransform:"none" }} > Already have an account ? <Link to="/login" style={{color:"#4343e9",textDecoration:"none", fontWeight:"500"}}>&nbsp; Login</Link></Button>
         </Box>
         <Box component="div" sx={{ p: 1,display:"flex" }}>
            <Grid container justifyContent="space-around" alignItems="center">
                <Grid item>
                <Button  variant="contained" sx={{bgcolor:"#f2793552"}}> <Link to="/" style={{textDecoration:"none" ,color:"#000",}}>  Google</Link>  </Button>
                </Grid>
                <Grid item> 
                <Button variant="contained" sx={{bgcolor:"#f2793552"}}> <Link to="/" style={{textDecoration:"none", color:"#000",}}> Facebook</Link>  </Button>
                </Grid>
            </Grid>
         </Box>
    </Box>
  
</div>
  )
}

export default SignUp
