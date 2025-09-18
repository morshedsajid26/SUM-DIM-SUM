import React from 'react'
import Container from './Container'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaXTwitter } from 'react-icons/fa6'
import { IoCallOutline, IoLocationOutline, IoMailOutline } from "react-icons/io5";
import Image from 'next/image';
import  logo  from "/public/FooterLogo.png";
import { BsCCircle } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='pt-[120px] '>
        <Container className='border-y border-[#B31217] grid md:grid-cols-3 justify-center md:justify-between py-[60px]'>
            <div className="left gap-5 text-center items-center flex flex-col">
              
                    <h3 className=' uppercase text-[24px] font-bold font-cinzel '>Contact</h3>
                    <p className=' text-[16px] flex items-center gap-1 font-raleway'>
                    <IoLocationOutline className='w-6 h-6 text-black' />
                    
                       Your Address Here
                    </p>
                                        
                                    
                    <p className=' text-[16px] flex items-center gap-1 font-poppins'>
                    <IoCallOutline className='w-6 h-6 text-black' />
                    +1234567890
                     </p>
                                        
                                    
                    <p className=' text-[16px] flex items-center gap-1 font-raleway'>
                    <IoMailOutline  className='w-6 h-6 text-black'/>
                        example@example.com
                    </p>
             
            </div>
            <div className="middle flex flex-col items-center text-center gap-10 md:my-0 my-[60px]">
                <Image src={logo} alt="logo" />
                <div className="icon list-none flex justify-center items-center gap-5">
                               <li> 
                                <a href="#">
                                    <FaFacebookF className='w-[11.15px] h-6' />
                                    </a>
                               </li>
                
                               <li> 
                                <a href=""><FaInstagram className='w-6 h-6'/></a>
                               </li>
                                
                                <li> 
                                <a href="#">
                                <FaLinkedinIn className='w-[25.36px] h-6' />
                                </a>
                               </li>
                
                               <li> 
                                <a href="#">
                                <FaXTwitter className='w-[23.47px] h-6' />
                                </a>
                               </li>
                
                            </div>
            </div>
            <div className="right text-center items-center md:text-end">
                <ul className='list-none text-[18px] font-raleway flex flex-col gap-[19px]'>
                    <li>
                        <a href="#">Home</a>
                        </li>
                    <li>
                        <a href="#">About</a>
                        </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                        </li>
                    <li>
                        <a href="#">Terms & Conditions</a>
                        </li>
                </ul>
            </div>

        </Container>
        <p className='flex  items-center gap-1 justify-center py-5 font-raleway '>Copyright 2024 <BsCCircle className='w-4 h-4' /> SumDimSum</p>
    </footer>
  )
}

export default Footer