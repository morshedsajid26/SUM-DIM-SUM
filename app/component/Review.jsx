"use client";
import React, { useState } from 'react'
import Container from './Container'
import Image from 'next/image'
import headerImage from '/public/headerImage.png'
import clientImage from '/public/clientImage.png'
import icon from '/public/icon.png'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const SliderCard =() =>{
    return(
        <div className=' relative w-[994px] text-center flex flex-col items-center gap-5 mx-auto pb-[62px]'> 
    <Image src={clientImage}/>
<p className='font-raleway text-[16px] text-[#E6F6FC]'>Sum Dim Sum is more than just a restaurant—it’s an experience that transports you to the heart of Asian culinary tradition. Each bite is a harmonious blend of flavor, texture, and passion, crafted meticulously to reflect the essence of dim sum culture. The moment you step in, you’re greeted by the comforting aroma of freshly steamed dumplings, the vibrant energy of a bustling kitchen, and the warm smiles of a team dedicated to delivering perfection on every plate.</p>
<div className="icon flex items-center gap-2.5">
    <FaStar className='w-[35px] h-[35px] text-[#FFD500]'/>
    <FaStar className='w-[35px] h-[35px] text-[#FFD500]'/>
    <FaStar className='w-[35px] h-[35px] text-[#FFD500]'/>
    <FaStar className='w-[35px] h-[35px] text-[#FFD500]'/>
    <FaStar className='w-[35px] h-[35px] text-[#FFD500]'/>
</div>
<div className='flex items-center gap-4 absolute bottom-0 -right-30'>
    <span className='w-[60px] h-[1px] bg-[#F8F8FF]/40 '></span>
    <h3 className=' text-[#F8F8FF]/40 font-passions-conflict text-[80px]'> Rosario Rosa</h3>
</div>
</div>
    )       
}

function SampleNextArrow(props) {
  const {  style, onClick } = props;
  return (
    <div
      className='absolute right-0 top-1/2 -translate-y-1/2 '
      style={{ ...style, display: "flex", background: "" }}
      onClick={onClick}
    >
      <div className=''>
        <MdArrowForwardIos className='w-[60px] h-[60px] text-[#F8F8FF]/40' />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {  style, onClick } = props;
  return (
    <div
     className='absolute left-0 top-1/2 -translate-y-1/2  '
      style={{ ...style, display: "flex",background: "" }}
      onClick={onClick}
    >
       <div className=''>
        <MdArrowBackIos className='w-[60px] h-[60px] text-[#F8F8FF]/40 hidden' />
       </div>
    </div>
  );
}

const Review = () => {
    let [active, setActive] = useState(0);
   

     var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    appendDots: dots => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className={`border border-[#E6F6FC]/40 p-2 text-[0px] ${active === i ? 'bg-[#E6F6FC] ' : 'bg-transparent' } `}
        style={{
          width: "10px",
          height: "10px",
          rotate: "45deg",
          color: "#E6F6FC",
          
          
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
        <Container>
            <div className='text-center flex flex-col items-center gap-5'>
                            <h1 className='uppercase text-[48px] font-cinzel font-semibold  '>The Talk of the Town</h1>
                            <Image src={headerImage}/>
                        </div>
        </Container>

        <div className='bg-[url(/ReviewBG.png)] bg-cover bg-center bg-no-repeat mt-[60px] '>
<Container className=' py-[60px]'>
    <Image src={icon}/>

<Slider {...settings}>
        <SliderCard/>
        <SliderCard/>
        <SliderCard/>
        <SliderCard/>
        <SliderCard/>
       
      </Slider>


</Container>
        </div>
        
    </div>
  )
}

export default Review