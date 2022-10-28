import React from 'react'

import dealsStyle from "./deals.module.css"

import CashBackClimeCard from "./CashBackClaimCard"
import {Box, Button, Typography,Grid} from '@mui/material';
import productImg from "../../assets/images/iPhone.png"
import brandImage from "../../assets/images/fkm_cover.png"

const Deals = () => {

 const title ="OnePlus node ce 2 Lite"



  return (
    <>
      <Box component="div" sx={{padding:1}} >
                <Typography variant="h6" sx={{fontWeight:"600"}} component="h6"> {title}</Typography>
                <Box component='div' sx={{padding:"20px 0 20px ",margin:"10px 7px 10px ", border:"1px solid #e1dadab3", borderRadius:"10px", position:"relative", overflow:"hidden"}}>
                    <div className={dealsStyle.product_offer}>
                        <Typography  variant="strong" sx={{color:"#fff"}} component="strong">50% OOF</Typography>
                    </div>
                  <Box sx={{maxWidth:"350px",margin:"auto"}} component='div'>
                     <img style={{width:"100%"}} src={productImg} alt=''></img>
                   </Box> 
                   <Box sx={{maxWidth:"350px",margin:"auto"}} component='div'>
                   <Typography variant="p" sx={{fontWeight:"400", marginTop:"10px"}} component="p"> Choose the best price and the rertailer</Typography>
                   <Button sx={{color:"#fff" ,width:"100%",marginTop:"15px",fontWeight:"600"}} variant="contained">Shope & Earn CashBack</Button>
                   </Box>
                   <Box sx={{maxWidth:"350px",margin:"auto",marginTop:"15px",padding:"5px 10px"}} component='div'>
                    <Grid  container justifyContent="space-between"  alignItems="center">
                        <Grid item><div className={dealsStyle.card_mrp_box}><strong>&#8377; 500 </strong> <span>&#8377; 1000</span></div></Grid>
                        <Grid item>
                            <Box component='div' sx={{maxWidth:"100px"}}>
                                <img style={{width:"100%"}} src={brandImage} alt=''></img>
                            </Box>
                        </Grid>
                    </Grid>
                   </Box>
                </Box>
                 {/* cash backclaim card start  */}
                <CashBackClimeCard></CashBackClimeCard>
                  {/* cash backclaim card end  */}
                <Box component='div' sx={{padding:"13px 14px ",margin:"10px 7px 10px ", border:"1px solid #e1dadab3", borderRadius:"10px", }}>
                <Typography variant="h5" sx={{ fontWeight:"600"}} component="h5"> About The Deals</Typography>
                <div  className={dealsStyle.about_the_deals_tag}>
                <Grid   container justifyContent="flex-start" flexWrap="wrap"  alignItems="center" spacing={1}>
                  <Grid  item><strong>Card1</strong></Grid>
                  <Grid  item><strong>Card1</strong></Grid>
                  <Grid  item><strong>Card1</strong></Grid>
                  <Grid  item><strong>Card1</strong></Grid>
                  <Grid  item><strong>Card1</strong></Grid>
                  <Grid  item><strong>Card1</strong></Grid>
                  <Grid  item><strong>Card1</strong></Grid>
                  <Grid  item><strong>Card1</strong></Grid>
                  <Grid  item><strong>Card1</strong></Grid>
                 </Grid>
                </div>
                <Box component='div' > 
                <Typography variant="p" sx={{ fontWeight:"400",color:"gray"}} component="p">industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                </Box >
                <Box  component='div'sx={{padding:"10px 0"}}> 
                <Typography variant="h6" sx={{ fontWeight:"500",lineHeight:"1"}} component="h6"> Here is how you can avail of this offer</Typography>
                <ul style={{color:"gray", padding:"10px", paddingLeft:"20px"}}>
                  <li>Lorem Ipsum has been standard</li>
                  <li>Lorem Ipsum has been standard</li>
                  <li>Lorem Ipsum has been standard</li>
                  <li>Lorem Ipsum has been standard</li>
                  <li>Lorem Ipsum has been standard</li>
                  <li>Lorem Ipsum has been standard</li>
                  <li>Lorem Ipsum has been standard</li>
                </ul>
                </Box>
                <Box  component='div'sx={{padding:"10px 0"}}> 
                <Typography variant="h6" sx={{ fontWeight:"500",lineHeight:"1"}} component="h6"> Highligths</Typography>
                <ul style={{color:"gray", padding:"10px", paddingLeft:"20px"}}>
                  <li>Lorem Ipsum </li>
                  <li>Lorem Ipsum has been standard</li>
                  <li>Lorem Ipsum standard</li>
                  <li>Lorem Ipsum has been standard</li>
                  <li>Lorem  been standard</li>
                  <li>Lorem Ipsum hdard</li>
                  <li>Lorem Ipsum has been</li>
                </ul>
                </Box>
                
                </Box>
      </Box>
    </>
  )
}

export default Deals
