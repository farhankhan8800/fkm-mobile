import React from 'react'

// import { Link } from 'react-router-dom';
import { Splide, SplideSlide,} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import image from '../../assets/images/img.jpg'
import hotImage from '../../assets/images/hot_burn.png'
import { Grid, Box, Typography } from '@mui/material';
        const banner=[
                {
                   src:"https://images.freekaamaal.com/sticky/india-circus-crafted-coffee-mugs-(18-oct)jpg.webp",
                   alt:"banner",
                   link:"https://freekaamaal.com/"
                },
                {
                  src:"https://images.freekaamaal.com/sticky/wingreenworld-raw-healthy-smoothie-combo-(20-oct)jpg.webp",
                  alt:"banner",
                  link:"https://freekaamaal.com/"
                },
                {
                  src:"https://images.freekaamaal.com/sticky/flipkart-grocery-items-from-rs1-(20-oct)jpg.webp",
                  alt:"banner",
                  link:"https://freekaamaal.com/"
                }, 
                {
                  src:"https://images.freekaamaal.com/sticky/cadbury-diwali-oreo-gift-set-(20-oct)jpg.webp",
                  alt:"banner",
                  link:"https://freekaamaal.com/"
                }
        ]


const DealOfTheDay = () => {
    const options = {
      gap   : '.6rem',
      drag   : 'free',
      perPage: 3,
      autoScroll: {
        speed: 1,
      },
    };
      return (
                <>
                 <Grid container sx={{ padding:"13px 3px"}}>
                   <Grid item>
                      <Box component="div" sx={{ width:"30px", marginRight:"10px"}}>
                        <img src={hotImage} alt="Hot Deal Of the Day"  style={{width:"100%"}}/>
                      </Box>
                   </Grid>
                   <Grid item>
                      <Typography variant="h6" component="h6"> Deal <strong>Of The Day</strong></Typography>
                   </Grid>
                 </Grid>
                <Splide  className='deal_of_the_day' options={ options } >
                                {
                                banner.map((item,i)=>{
                                    return(
                                    <SplideSlide key={i}>
                                        <a href={item.link} target="_blank"><img src={item.src} alt={item.alt}/></a>
                                    </SplideSlide>
                                    )
                                })
                            }
                </Splide>
                </>         
       ) 
  }
  

export default DealOfTheDay
