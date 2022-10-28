
import React from 'react'

// import homeStyle from "./home.module.css"
import Carousel from '../../component/home/Carousel'
import DealOfTheDay from '../../component/home/DealOfTheDay'
import LiveDeals from '../../component/home/LiveDeals'
import HotDeals from '../../component/home/HotDeals'
import CashBackStore from '../../component/home/CashBackStore'
import HowToEarnCashback from "../../component/home/HowToEarnCashback"

const Home = () => {
  return (
    <>
     <Carousel />
     <DealOfTheDay />
     <LiveDeals /> 
     <HotDeals />
     <CashBackStore />
     <HowToEarnCashback />
    
    </>


  )
}

export default Home
