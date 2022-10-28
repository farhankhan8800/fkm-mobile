import React,{useState} from 'react'
import similarMoreProductsStyle from './similarMoreProduct.module.css'

import { Grid, Box,Card,CardActionArea} from '@mui/material';


import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';

import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

const Tab = styled(TabUnstyled)`
font-family: IBM Plex Sans, sans-serif;
color: #fff;
cursor: pointer;
font-size: 0.875rem;
font-weight: 600;
background-color: transparent;
min-width:130px ;
padding: 16px 39px;
margin: 2px 2px;
border: none;
border-radius: 7px;
display: flex;
justify-content: center;


&.${tabUnstyledClasses.selected} {
  background-color: #fff;
  color:#f27935;
}
`;

const TabsList = styled(TabsListUnstyled)(
    ({ theme }) => `
    background-color: #f27935;
    display: flex;
    border-radius: 7px;
    align-items: center;
    justify-content: space-around;
    align-content: center;
  
    `,
  );
const TabPanel = styled(TabPanelUnstyled)(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    overflow:auto;
    padding: 20px 12px;
    background: ${theme.palette.mode === 'dark' ? " #f27935" : '#fff'};
    border-radius: 0px;
    `,
  );

const SimilarMoreProducts = () => {
  const [store, setStore] = useState([]);

  
  React.useEffect(() => {
    fetch('http://localhost:3004/cashBackStore')
      .then(results => results.json())
      .then(data => {
        // console.log(data)
        setStore(data)
      });
  }, [])

  return (
   
    <>
        <Box sx={{ width: '100%',padding:"10px 17px" }}>
        <TabsUnstyled defaultValue={0}>
            <TabsList className={similarMoreProductsStyle.tabsList} sx={{bgcolor:"#f27935"}} >
                <Tab>Similar Product</Tab>
                <Tab>More Product</Tab>
            </TabsList>
            <TabPanel value={0}>
                    <Grid container  direction="row" justifyContent="space-around" alignItems="center"> 
                      {
                        store.map((item,i)=>{
                        return(
                          <Grid key={i} item sx={{}}>
                          <Card  sx={{ maxWidth:"150px",padding:"5px 3px 7px 3px ",marginBottom:"10px" ,bgcolor:"#f1f1f1"}}>
                          <a className={similarMoreProductsStyle.cash_back_store_link} href={item.link}>
                          <CardActionArea>
                          <img src={item.imgSrc} alt="store"  width="100%"/>
                          <p className={similarMoreProductsStyle.cash_back_store_offer} >{item.storeName}</p>
                          </CardActionArea>
                          </a>
                          </Card>
                          </Grid>
                        )
                      })
                      }
                    
                    </Grid>
            </TabPanel>
            <TabPanel value={1}>
                    <Grid container  direction="row" justifyContent="space-around" alignItems="center"> 
                    {
                        store.map((item,i)=>{
                        return(
                          <Grid key={i} item sx={{}}>
                          <Card  sx={{ maxWidth:"150px",padding:"5px 3px 7px 3px ",marginBottom:"10px" ,bgcolor:"#f1f1f1"}}>
                          <a className={similarMoreProductsStyle.cash_back_store_link} href={item.link}>
                          <CardActionArea>
                          <img src={item.imgSrc} alt="store"  width="100%"/>
                          <p className={similarMoreProductsStyle.cash_back_store_offer} >{item.storeName}</p>
                          </CardActionArea>
                          </a>
                          </Card>
                          </Grid>
                        )
                      })
                      }
                    </Grid>
                    
            </TabPanel>
        </TabsUnstyled>
      </Box>
    </>
  )
}

export default SimilarMoreProducts



