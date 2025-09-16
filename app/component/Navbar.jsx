'use client'
import React from 'react'
import Container from './Container'
import Image from 'next/image'
import logo from '/public/NavLogo.png'

import Li from './Li'



const Navbar = () => {
  


  return (
   
    <nav className='py-[25px]'>
        <Container className={'flex items-center  justify-between'}>
            <div className="logo w-[148px]">
                <Image src={logo} alt="logo"/>
            </div>
            <div className="menu w-[756px] flex gap-10 ">
                <Li liText='Home'/>
                <Li liText='About'/>
                <Li liText='Menu & Locations'/>
                <Li liText='Reservation'/>
                <Li liText='Merchandise'/>
                <Li liText='Career'/>
                <Li liText='Contact'/>
            </div>
            <div className="button">
              <button className='text-white text-[16px] font-semibold py-2.5 px-5 bg-white/12 rounded-[10px] font-raleway'>Book a Table</button>
            </div>
        </Container>
    </nav>
  
  )
}

export default Navbar