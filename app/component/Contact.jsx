import React from 'react'
import Container from './Container'
import tree from '/public/ContactLeft.png'
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter, FaXTwitter } from 'react-icons/fa6';
import { HiMiniArrowLongRight } from 'react-icons/hi2';

const Contact = () => {
  return (
    <div className='pt-[120px]'>
        <Container className='flex'>
            <div className="form w-[826px] bg-[url(/ContactBG.png)] bg-cover bg-center bg-no-repeat py-[120px] px-[60px] rounded-l-[20px]">
            <h3 className='font-raleway text-[24px] font-semibold text-[#F8F8FF]'>Just Say Hi !</h3>
            <p className='font-raleway text-[16px] text-[#F8F8FF] mt-2'>Tell us more about you and we’ll contact you soon.</p>

            <form className='w-[706px] mt-[60px] flex flex-col items-end'>
                <input className='w-full text-[#F8F8FF] placeholder-[#F8F8FF]  outline-none border-b border-[#E6F6FC] pb-3' type="text" placeholder='Name' />

               <div className='flex gap-6 mt-10'>
                 <input className='w-[341px] text-[#F8F8FF] placeholder-[#F8F8FF]  outline-none border-b border-[#E6F6FC] pb-3' type="text" placeholder='Email' />

                <input className='w-[341px] text-[#F8F8FF] placeholder-[#F8F8FF]  outline-none border-b border-[#E6F6FC] pb-3' type="text" placeholder='Phone Number' />
               </div>

                <textarea className='w-full text-[#F8F8FF] placeholder-[#F8F8FF]  outline-none border-b border-[#E6F6FC] resize-none mt-[120px]' placeholder='Your Message'></textarea>

                <button className='bg-[#B31217] text-white text-[18px] font-semibold py-[11.5px] px-[49.5px] rounded-[10px] mt-[60px] flex items-center font-raleway cursor-pointer '>Submit
                    <HiMiniArrowLongRight className='w-6 h-6 ml-2' />
                </button>
            </form>


            </div>

            <div className="info w-[494px] bg-[#F7E7E8] rounded-r-[20px] text-[#0C0C0C] ">
                <div className="tree pt-[163px] pb-[42px] relative">
                    <Image src={tree} alt='tree'/>

                    <div className="text absolute top-1/2  left-0 w-full -translate-y-1/2 pl-[60px]">
                    
                    <h3 className='text-[24px] font-poppins font-semibold mb-5'>Contact Information</h3>
                    <p className='font-open-sans text-[16px]'>Maui, Hawaii, USA</p>
                    <p className='font-open-sans text-[16px] my-3'>Call us: +1234567890</p>
                    <p className='font-open-sans text-[16px]'>Whatsapp: +1234567890</p>

                    <div>
                        <h3 className='font-poppins text-[24px] font-semibold mt-[60px]'>Follow Us</h3>
                        <div className="icon flex items-center gap-5 mt-5">
                            <FaFacebookF className='w-[9.29px] h-5'/>
                            <FaLinkedinIn className='w-[21.13px] h-5'/>
                            <FaXTwitter className='w-[19.56px] h-5'/>
                        </div>


                    </div>
                     <h3 className='font-passions-conflict text-[64px] text-[#646464] pt-[40px] pl-[181px]'>Contact Us</h3>

                </div>
               
                </div>
                

                

            </div>
        </Container>
    </div>
  )
}

export default Contact