import React from 'react'
import Navbar from './component/Navbar'
import Container from './component/Container'
import { HiMiniArrowLongRight } from "react-icons/hi2";
import frame from '/public/frame.png'
import Image from 'next/image';
import DivePart from './component/DivePart';
import Contact from './component/Contact';
import Reservation from './component/Reservation';
import TraditionPart from './component/TraditionPart';
import Review from './component/Review';
import StoryPart from './component/StoryPart';

const page = () => {
  return (
    <div>
      <div className='bg-[url(/Banner.png)] md:h-full min-h-screen bg-cover bg-center bg-no-repeat ' id=''>
     <Navbar/>


     <div  className='md:pt-[190px] pt-[80px] md:pb-[261px] pb-[150px]'>
      <Container  >
        <div className='relative flex flex-col items-center justify-center text-center '>
          <h1 className='text-white text-[32px] md:text-[64px] font-bold text-center font-cinzel'>Welcome to Sum Dim Sum – Where Every Bite Tells a Story</h1>
        
        <p className='text-white text-[12px] md:text-[16px] mt-5 md:w-[850px] text-center font-raleway'>At Sum Dim Sum, we bring families and friends together over the timeless tradition of sharing delectable dishes. From our expertly crafted dim sum to our vibrant ambiance, every moment here is a celebration of taste and togetherness. Explore our menu, reserve your table, or order your favorites online today!</p>
        
        <button className='bg-[#B31217] text-white text-[12px] md:text-[16px] font-semibold py-3 px-5 rounded-[10px] mt-[60px] flex items-center font-raleway cursor-pointer'>Explore Our Menu
          <HiMiniArrowLongRight className='md:w-5 w-4 h-4 md:h-5 ml-2' />
        </button>
        </div>
       <div  className='absolute md:block hidden  bottom-100% right-20 '> 
        <Image src={frame} alt='frame' /></div>
      </Container>
      

     </div>

    </div>
    <StoryPart/>
    <TraditionPart/>
    <DivePart/>
    <Review/>
    <Reservation/>
    <Contact/>
    </div>
  )
}

export default page