"use client";
import React, { useState } from 'react'
import Container from './Container'
import Image from 'next/image'
import Tradition1 from '/public/Tradition1.png'
import Tradition2 from '/public/Tradition2.png'
import Tradition3 from '/public/Tradition3.png'
import Tradition4 from '/public/Tradition4.png'
import headerImage from '/public/headerImage.png'
import { HiMiniArrowLongRight } from 'react-icons/hi2'
import Slider from 'react-slick'

let SliderPart = ()=>{
    return(
        <div className='pb-[60px]'>
            <div className="flex gap-3 md:gap-6">
                 <div className="w-[848px] relative rounded-[15px] overflow-hidden">
                <Image className='' src={Tradition1} alt='image'/>
                <div className=' absolute bottom-0 rounded-b-[15px]  w-full p-5 bg-black/40 backdrop-blur-xl md:flex items-center justify-between hidden '> 
                <div className='w-[438px]'>
                    <h3 className='font-raleway text-[18px] font-semibold text-[#F8F8FF] mt-3'>Wolfberry with Mushroom Siew Mai 枸杞子烧卖</h3>
                <p className='font-raleway text-[16px] text-[#F8F8FF] mt-3'>A traditional dim sum favorite featuring steamed dumplings
                filled with succulent pork, mushrooms, and topped with
                wolfberries for a hint of sweetness.</p>
                </div>
                <button className='border border-[#F8F8FF] text-[#F8F8FF] text-[16px] font-semibold py-2 px-4 rounded-[10px] mt-5 flex items-center font-raleway cursor-pointer '>View Details
                    <HiMiniArrowLongRight className='w-6 h-6 ml-2' />
                </button>

                </div>
            </div>
            <div className="w-[448px]">
                 <Image src={Tradition2} alt='image'/>
            </div>
            </div>
            <div className="flex gap-6 mt-6">
                <div className="w-[448px] ">
                 <Image src={Tradition3} alt='image'/>
            </div>
            <div className="w-[848px] ">
                 <Image src={Tradition4} alt='image'/>
            </div>
            </div>
        </div>
    )}

const TraditionPart = () => {
    let [active, setActive] = useState(0);
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    

    appendDots: dots => (
      <div
        style={{
          backgroundColor: "transparent",
          
          padding: "10px",
          marginTop: "60px",
          display: "flex", justifyContent: "center",
          itemsAlign: "center",
          
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className={`border border-[#B31217] p-2 text-[0px] mt-[60px] ${active === i ? 'bg-[#B31217] ' : 'bg-transparent' } `}
        style={{
          width: "10px",
          height: "10px",
          rotate: "45deg"
          
          
        }}
      >
        {i + 1}
      </div>
    ),
     beforeChange: (item, i) => {
        setActive(i);
    }
  };
  return (
    <div className='py-[120px] '>
        <Container >
            <div className='text-center flex flex-col items-center gap-5'>
                <h1 className='uppercase text-[24px] md:text-[48px] font-cinzel font-semibold  '>taste the tradition</h1>
                <Image src={headerImage} alt='image'/>
            </div>
           <div className='mt-[60px]'>
            <Slider {...settings}>
                <SliderPart/>
                <SliderPart/>
                <SliderPart/>
                <SliderPart/>
                <SliderPart/>


            </Slider>
           </div>
        </Container>
    </div>
  )
}

export default TraditionPart