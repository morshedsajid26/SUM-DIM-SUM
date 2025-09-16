import React from 'react'
import Container from './Container'
import { FaLinkedinIn, FaFacebookF,FaInstagram,FaXTwitter,FaLocationDot  } from "react-icons/fa6";
import {  MdCall,MdEmail} from "react-icons/md";

const Header = () => {
  return (
    <div className='bg-black'>
        <Container className={'flex items-center justify-between py-2.5'}>
            <div className="left flex items-center gap-10">
               
                    <p className='text-white text-[12px] flex items-center gap-2'>
                    <FaLocationDot className='w-5 h-5 text-white' />

                    Your Address Here
                    </p>
                    
                
                    <p className='text-white text-[12px] flex items-center gap-2'>
                    <MdCall className='w-5 h-5 text-white' />
                        +1234567890
                    </p>
                    
                
                    <p className='text-white text-[12px] flex items-center gap-2'>
                    <MdEmail className='w-5 h-5 text-white'/>
                        example@example.com
                    </p>
                    
            </div>

            <div className="right w-[130px] list-none flex items-center gap-5">
               <li> 
                <a href="#">
                    <FaFacebookF className='w-[9.2px] h-[20px] text-white' />
                    </a>
               </li>

               <li> 
                <a href=""><FaInstagram className='w-[20px] h-[20px] text-white'/></a>
               </li>
                
                <li> 
                <a href="#">
                <FaLinkedinIn className='w-[21.13px] h-[20px] text-white' />
                </a>
               </li>

               <li> 
                <a href="#">
                <FaXTwitter className='w-[19.5px] h-[20px] text-white' />
                </a>
               </li>

            </div>
        </Container>
    </div>
  )
}

export default Header