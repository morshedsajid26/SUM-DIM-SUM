import React from 'react'
import Navbar from './component/Navbar'
import Container from './component/Container'
import { HiMiniArrowLongRight } from "react-icons/hi2";
import frame from '/public/frame.png'
import Image from 'next/image';

const page = () => {
  return (
    <div className='bg-[url(/Banner.png)]  bg-cover bg-center bg-no-repeat '>
     <Navbar/>


     <div  className='pt-[190px] pb-[261px]'>
      <Container  >
        <div className='relative flex flex-col items-center justify-center text-center '>
          <h1 className='text-white text-[48px] font-bold text-center'>Welcome to Sum Dim Sum – Where Every Bite Tells a Story</h1>
        
        <p className='text-white text-[16px] mt-5 w-[850px] text-center'>At Sum Dim Sum, we bring families and friends together over the timeless tradition of sharing delectable dishes. From our expertly crafted dim sum to our vibrant ambiance, every moment here is a celebration of taste and togetherness. Explore our menu, reserve your table, or order your favorites online today!</p>
        
        <button className='bg-[#B31217] text-white text-[16px] font-semibold py-3 px-5 rounded-[10px] mt-[60px] flex items-center '>Explore Our Menu
          <HiMiniArrowLongRight className='w-5 h-5 ml-2' />
        </button>
        </div>
       <div  className='absolute  bottom-100% right-20 '> 
        <Image src={frame} alt='frame' /></div>
      </Container>
      

     </div>

    </div>
  )
}

export default page