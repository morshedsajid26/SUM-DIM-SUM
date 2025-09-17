import React from 'react'
import Container from './Container'
import Image from 'next/image'
import headerImage from '/public/headerImage.png'
import clientImage from '/public/clientImage.png'
import icon from '/public/icon.png'
import { FaStar } from 'react-icons/fa6'

const Review = () => {
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
<div className='flex items-center gap-4 absolute -bottom-20 -right-30'>
    <span className='w-[60px] h-[1px] bg-[#F8F8FF]/40 '></span>
    <h3 className=' text-[#F8F8FF]/40 font-passions-conflict text-[80px]'> Rosario Rosa</h3>
</div>
</div>

</Container>
        </div>
    </div>
  )
}

export default Review