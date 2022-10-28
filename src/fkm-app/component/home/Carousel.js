import React from 'react'
// import { Link } from 'react-router-dom';
import { Splide, SplideSlide,} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import image from '../../assets/images/img.jpg'
        const banner=[
                {
                   src:"https://images.freekaamaal.com/home-slider/site/mobile_root-natural-branding-banner-(21-oct)-mobilejpg.webp",
                   alt:"banner",
                   link:"https://freekaamaal.com/"
                },
                {
                  src:"https://images.freekaamaal.com/home-slider/site/mobile_food-mania-live-again-(20-oct)-mobilejpg.webp",
                  alt:"banner",
                  link:"https://freekaamaal.com/"
                },
                {
                  src:"https://images.freekaamaal.com/home-slider/site/mobile_croma-sale-is-live-(19-oct)-mobilejpg.webp",
                  alt:"banner",
                  link:"https://freekaamaal.com/"
                }, 
                {
                  src:"https://images.freekaamaal.com/home-slider/site/mobile_drrashel-facial-kit-(20-oct)-mobilejpg.webp",
                  alt:"banner",
                  link:"https://freekaamaal.com/"
                }
        ]

const Carousel = () => {
  const options = {
    type         : 'loop',
    autoplay     : true
  };
    return (
      <div style={{paddingTop:"56px"}}>
         <Splide  className='Carousel_class' options={ options } >
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
      </div>
           
     ) 
}

export default Carousel
