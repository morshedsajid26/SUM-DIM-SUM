'use client';
import React, { useState } from 'react'
import Container from './Container'
import Image from 'next/image'
import logo from '/public/NavLogo.png'

import Li from './Li'
import { FaBars, FaTimes } from 'react-icons/fa'



const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
  


  return (
   
    <nav className='py-[25px] '>
        <Container className={'flex items-center  justify-between'}>
            <div className="logo w-[148px]">
                <Image className='md:w-full w-[120px]' src={logo} alt="logo"/>
            </div>

             <div
              className={`md:w-[756px] w-full flex md:gap-10 gap-5 absolute md:static top-0 right-0   bg-[#000000]/80 md:bg-transparent z-20 flex-col md:flex-row items-center justify-center transition-all duration-300 md:px-0 px-20 py-[70px] md:py-0 text-center ${isMenuOpen ? "translate-y-0":"-translate-y-[200%] md:-translate-y-0"}`}
              >
                <Li liText='Home'/>
                <Li liText='About'/>
                <Li liText='Menu & Locations'/>
                <Li liText='Reservation'/>
                <Li liText='Merchandise'/>
                <Li liText='Career'/>
                <Li liText='Contact'/>
            </div>
            
            <div className="button ">
              <button className='text-white text-[16px] font-semibold py-2.5 px-5 bg-white/12 rounded-[10px] font-raleway md:flex hidden'>Book a Table</button>

               
            </div>
            <div className="md:hidden mt-[4px] mr-4 z-30 ">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='cursor-pointer'
          >
            {isMenuOpen ? (
              <FaTimes size={24} color="#FAFAFA" />
            ) : (
              <FaBars size={24} color="#FAFAFA" />
            )}
          </button>
        </div>

            
        </Container>
    </nav>
  
  )
}

export default Navbar