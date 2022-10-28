import React from 'react'

import {Toolbar, AppBar, Box, IconButton, Grid} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box >
      <AppBar  sx={{ flexGrow: 1,maxWidth:"600px", position:"fixed",width:"100%", zIndex:"9999",margin:"auto",left:"0" }} >
        <Toolbar>
            <IconButton  size="large" aria-label="MenuIcon"sx={{color:"#fff"}}>
            <MenuIcon  fontSize="inherit" />
            </IconButton>
            <Grid container  justifyContent="flex-end" alignItems="center">
             <Grid item>
             <IconButton  size="large" aria-label="SearchIcon"sx={{color:"#fff"}}>
            <SearchIcon  fontSize="inherit" />
            </IconButton>
             </Grid>
             <Grid item>
             <IconButton  size="large" aria-label="PersonOutlineIcon">
             <Link  style={{color:"#fff", display:"flex", alignItems:"center",justifyContent:"center"}} to='/login'><PersonOutlineIcon  fontSize="inherit" /></Link> 
            </IconButton>
             </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
