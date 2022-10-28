import React,{useState} from 'react'

import hotDealsStyle from "./HotDeals.module.css"

import image from '../../assets/images/img.jpg'
import hotImage from '../../assets/images/hot_burn.png'

import { Grid, Box, Typography, CardActionArea, CardContent,Card, Button } from '@mui/material';
import { Link } from 'react-router-dom';
        const banner=[
                {
                   src:"https://images.freekaamaal.com/featured_images/large_185287_Untitleddesign-2022-10-21T110259.194.png",
                   alt:"banner",
                   mrp:300,
                   text:" Lizards are a widespread group of squamate  ",
                   Viewers:5,
                   title:"AURIC",
                   producId:1
                },
                {
                  src:"https://images.freekaamaal.com/featured_images/large_185255_Untitleddesign-2022-10-20T125630.961.png",
                  alt:"banner",
                  mrp:300,
                  text:" Lizards are a widespread group of squamate  ",
                  Viewers:5,
                  title:"AURIC",
                  producId:2
                },
                {
                  src:"https://images.freekaamaal.com/featured_images/185255_Untitleddesign-2022-10-20T125630.961.png",
                  alt:"banner",
                  mrp:300,
                  text:" Lizards are a widespread group of squamate  ",
                  Viewers:5,
                  title:"AURIC",
                  producId:3
                },
                {
                  src:"https://images.freekaamaal.com/featured_images/185238_1.jpg",
                  alt:"banner",
                  mrp:300,
                  text:" Lizards are a widespread group of squamate  ",
                  Viewers:5,
                  title:"AURIC",
                  producId:4
                },
                {
                  src:"https://images.freekaamaal.com/featured_images/185238_1.jpg",
                  alt:"banner",
                  mrp:300,
                  text:" Lizards are a widespread group of squamate  ",
                  Viewers:5,
                  title:"AURIC",
                  producId:5
                },
                {
                  src:"https://images.freekaamaal.com/featured_images/185238_1.jpg",
                  alt:"banner",
                  mrp:300,
                  text:" Lizards are a widespread group of squamate  ",
                  Viewers:5,
                  title:"AURIC",
                  producId:6
                },
                {
                  src:"https://images.freekaamaal.com/featured_images/185238_1.jpg",
                  alt:"banner",
                  mrp:300,
                  text:" Lizards are a widespread group of squamate  ",
                  Viewers:5,
                  title:"AURIC",
                  producId:4
                },
                {
                  src:"https://images.freekaamaal.com/featured_images/185238_1.jpg",
                  alt:"banner",
                  mrp:300,
                  text:" Lizards are a widespread group of squamate  ",
                  Viewers:5,
                  title:"AURIC",
                  producId:5
                },
                {
                  src:"https://images.freekaamaal.com/featured_images/185238_1.jpg",
                  alt:"banner",
                  mrp:300,
                  text:" Lizards are a widespread group of squamate  ",
                  Viewers:5,
                  title:"AURIC",
                  producId:4
                },
                {
                  src:"https://images.freekaamaal.com/featured_images/185238_1.jpg",
                  alt:"banner",
                  mrp:300,
                  text:" Lizards are a widespread group of squamate  ",
                  Viewers:5,
                  title:"AURIC",
                  producId:5
                },
                {
                  src:"https://images.freekaamaal.com/featured_images/185238_1.jpg",
                  alt:"banner",
                  mrp:300,
                  text:" Lizards are a widespread group of squamate  ",
                  Viewers:5,
                  title:"AURIC",
                  producId:4
                },
                {
                  src:"https://images.freekaamaal.com/featured_images/185238_1.jpg",
                  alt:"banner",
                  mrp:300,
                  text:" Lizards are a widespread group of squamate  ",
                  Viewers:5,
                  title:"AURIC",
                  producId:5
                }
        ]



const HotDeals = () => {
   const [countBanner, SetCountBanner]= useState(6)

   const slice = banner.slice(0, countBanner)
   const lodeMore =()=>{
    SetCountBanner(countBanner + 3)
   }
  return (
    <>

        <Grid container textAlign="center" justifyContent="space-between" sx={{padding:"13px 3px"}}>
          <Grid item >
            <Grid container> 
            <Grid item>
                <Box component="div" sx={{ width:"30px", marginRight:"10px"}}>
                <img src={hotImage} alt="Hot Deal Of the Day"  style={{width:"100%"}}/>
                </Box>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="h6"> Hot <strong>Deals</strong></Typography>
            </Grid>
            </Grid>
              
          </Grid>
          <Grid item>
            <Button><Link to=''>View All</Link></Button>
          </Grid>
        
        </Grid>
      <div  className={hotDealsStyle.flex_div} >
                    {
                    slice.map((item,i)=>{
                        return(
                           
                                <Box sx={{maxWidth:"167px", marginBottom:"10px ", }} component="div" key={i}>
                                    <Card  sx={{background:"#f1f1f1", border:"1px solid gary"}} >
                                    <Link className={hotDealsStyle.card_link} to={`/deal-details/${item.producId}`} >
                                        <CardActionArea>
                                        <img src={item.src} alt={item.alt}/>
                                        <CardContent sx={{background:"#f1f1f1", padding:"7px"}}>
                                            <Typography gutterBottom variant="h5" component="div" sx={{color:"#000" }}>{ item.title} </Typography>
                                            <Typography variant="body2" sx={{color:"#000" ,padding:"4px 0"}}>{ item.text} </Typography>
                                            <Box component="div" sx={{paddingTop:"4px"}}>
                                                <strong className={hotDealsStyle.card_amouunt}>&#8377;{item.mrp}</strong>
                                                <small className={hotDealsStyle.card_small_amouunt}>&#8377;{item.mrp}</small>
                                            </Box>
                                        </CardContent>
                                        </CardActionArea>
                                    </Link>
                                   </Card>
                                </Box>
                        )
                    })
                }
    </div>
    <Box component="div" sx={{ p: 1, textAlign:"center"}}>
      <Button onClick={lodeMore} sx={{color:"#fff", fontWeight:"600"}} variant="contained">Lode More</Button>
    </Box>          
    </>
  )
}

export default HotDeals
