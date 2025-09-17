import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Tradition1 from '/public/Tradition1.png'
import Tradition2 from '/public/Tradition2.png'
import Tradition3 from '/public/Tradition3.png'
import Tradition4 from '/public/Tradition4.png'
import headerImage from '/public/headerImage.png'

const TraditionPart = () => {
  return (
    <div className='pt-[120px] '>
        <Container className='' >
            <div className='text-center flex flex-col items-center gap-5'>
                <h1 className='uppercase text-[48px] font-cinzel font-semibold  '>taste the tradition</h1>
                <Image src={headerImage}/>
            </div>
           {/* <div className='grid grid-cols-2 grid-rows-2 gap-6'>
             <div className="w-[848px] bg-amber-300">
                <Image className='' src={Tradition4}/>
            </div>
            <div className="w-[448px]">
                 <Image src={Tradition2}/>
            </div>
            <div className="w-[448px]">
                 <Image src={Tradition3}/>
            </div>
            <div className="w-[848px]">
                 <Image src={Tradition4}/>
            </div>
           </div> */}
        </Container>
    </div>
  )
}

export default TraditionPart