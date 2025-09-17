import React from 'react'
import Container from './Container'
import Image from 'next/image'
import layer1 from '/public/Layer_1.png'
import layer2 from '/public/Layer_2.png'
import layer3 from '/public/Layer_3.png'
import layer4 from '/public/Layer_4.png'
import { HiMiniArrowLongRight } from 'react-icons/hi2'
import storybg from '/public/storybg.png'
import story2 from '/public/story2.png'


const StoryPart = () => {
  return (
    <div className='md:pt-[120px] pt-[80px] '>
        <Container>
            <div className='relative pb-[60px]'>
                <div className='bg-[#F7E7E8] p-[60px] md:w-[1096px] rounded-[20px] relative text-center'>
                    <h3 className='font-cinzel font-bold text-[24px] md:text-[48px] text-[#0C0C0C] uppercase'>our story</h3>
                    
                    <p className='md:w-[664px] text-[#0C0C0C] font-raleway text-[12px] md:text-[16px] mt-5'>At Sum Dim Sum, we are a local Singaporean brand that prepares dim sum dishes with wholehearted dedication and passion. Our chefs use traditional techniques to craft our dishes, ensuring that they are of the highest quality. Come and experience our fresh and flavorful cuisine.</p>
                    <button className='bg-[#B31217] text-white text-[12px] md:text-[16px] font-semibold py-3 px-5 rounded-[10px] mt-[40px] flex items-center font-raleway cursor-pointer ml-25 md:ml-0 '>Learn More
                        <HiMiniArrowLongRight className='w-5 h-5 ml-2' />
                    </button>

                    <Image className='absolute top-[82px] left-1/2 -translate-x-1/2' src={storybg} alt='image'/>
                </div>
                <div className='absolute top-[60px] -right-6 '>
                    <div className="relative w-[448px] h-[365px] border border-[#B31217] rounded-[20px] md:block hidden ">
                        
                    </div>
                   
                </div>
                 <Image className='md:absolute top-[84px] right-0 mt-5 md:mt-0' src={story2} alt='image'/>
            </div>

            <div className='down md:w-[1096px] mx-auto grid md:grid-cols-4 grid-cols-2 md:gap-[196px] gap-[60px] mt-[60px]'>
                <div className='flex flex-col items-center justify-center'>
                    <Image src={layer1} alt='image'/>
                    <p className='font-cinzel font-bold text-[36px] text-[#0C0C0C]'> 6,000+</p>
                    <p className='font-raleway font-medium text-[18px] text-[#0C0C0C]'>Happy Guests</p>

                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Image src={layer2} alt='image'/>
                    <p className='font-cinzel font-bold text-[36px] text-[#0C0C0C]'> 50+</p>
                    <p className='font-raleway font-medium text-[18px] text-[#0C0C0C]'>Unique Dishes </p>

                </div>

                <div className='flex flex-col items-center justify-cent'>
                    <Image src={layer3} alt='image'/>
                    <p className='font-cinzel font-bold text-[36px] text-[#0C0C0C]'> 20+</p>
                    <p className='font-raleway font-medium text-[18px] text-[#0C0C0C]'>Years Of Qualit</p>

                </div>

                <div className='flex flex-col items-center justify-center'>
                    <Image src={layer4} alt='image'/>
                    <p className='font-cinzel font-bold text-[36px] text-[#0C0C0C]'> 12+</p>
                    <p className='font-raleway font-medium text-[18px] text-[#0C0C0C]'>Monthly Event</p>

                </div>

                
            </div>
        </Container>
    </div>
  )
}

export default StoryPart