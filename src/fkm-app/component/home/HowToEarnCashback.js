import React from 'react'


import {Grid,Box,Typography} from '@mui/material';
import hotImage from '../../assets/images/hot_burn.png'
import cashBackwork from '../../assets/video/cashbackwork.mp4'

const HowToEarnCashback = () => {
  return (
    <>
      <Grid container sx={{ padding:"13px 3px"}}>
                <Grid item>
                    <Box component="div" sx={{ width:"30px", marginRight:"10px"}}>
                    <img src={hotImage} alt="Hot Deal Of the Day"  style={{width:"100%"}}/>
                    </Box>
                </Grid>
                <Grid item>
                    <Typography variant="h6" component="h6"> How To Earn <strong>Cashback?</strong></Typography>
                </Grid>
      </Grid>
      <Box component="div" sx={{ padding:"5px 17px"}}>
        <Box component="div" sx={{borderRadius:"10px",overflow:"hidden",boxShadow:" 0px 0px 6px -2px grey"}}>
                <video st controls width="100%" height="100%">
                  <source src={cashBackwork} type="video/mp4"/>
                   Your browser does not support the video tag.
                </video>
        </Box>
        <Box component="div" sx={{borderRadius:"10px",bgcolor:"pink"}}>
               
        </Box>
      </Box>
     
    </>
  )
}

export default HowToEarnCashback
