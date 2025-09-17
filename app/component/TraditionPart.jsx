import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Tradition1 from '/public/Tradition1.png'
import Tradition2 from '/public/Tradition2.png'
import Tradition3 from '/public/Tradition3.png'
import Tradition4 from '/public/Tradition4.png'
import headerImage from '/public/headerImage.png'
import { HiMiniArrowLongRight } from 'react-icons/hi2'

const TraditionPart = () => {
  return (
    <div className='py-[120px] '>
        <Container >
            <div className='text-center flex flex-col items-center gap-5'>
                <h1 className='uppercase text-[48px] font-cinzel font-semibold  '>taste the tradition</h1>
                <Image src={headerImage}/>
            </div>
           <div className='mt-[60px]'>
            <div className="flex gap-6">
                 <div className="w-[848px] relative rounded-[15px] overflow-hidden">
                <Image className='' src={Tradition1}/>
                <div className=' absolute bottom-0 rounded-b-[15px]  w-full p-5 bg-black/40 backdrop-blur-xl flex items-center justify-between '> 
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
                 <Image src={Tradition2}/>
            </div>
            </div>
            <div className="flex gap-6 mt-6">
                <div className="w-[448px] ">
                 <Image src={Tradition3}/>
            </div>
            <div className="w-[848px] ">
                 <Image src={Tradition4}/>
            </div>
            </div>
           </div>
        </Container>
    </div>
  )
}

export default TraditionPart