import React from 'react'

import {Box,Grid, Typography,Button} from '@mui/material'
const CashBackClaimCard = () => {
  return (
    <>
     <Box  component="div" sx={{margin:"20px 7px",padding:"10px 15px",borderRadius:"10px", bgcolor:"#dddddd"}}>
      <Grid container  justifyContent="space-around" alignItems="center">
        <Grid item md={8}>
          <Box component="div">
            <Typography variant="h6" component="h6" >Cashback claim form</Typography>
            <Typography variant="p" component="p" >fill up this form within 24 hrs</Typography>
          </Box>
        </Grid>
        <Grid item md={4}>
        <Box component="div">
          <Button  variant="contained" sx={{color:"#fff", bgcolor:"gray"}}>submit</Button>
        </Box>
        </Grid>
      </Grid>
     </Box>

    </>
  )
}

export default CashBackClaimCard
