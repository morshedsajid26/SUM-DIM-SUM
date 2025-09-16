import React from 'react'
import { HiMiniArrowLongRight } from 'react-icons/hi2'
import Container from './Container'

const DivePart = () => {
  return (
    <div className='bg-[url(/Divepart.png)] py-[60px] bg-cover bg-center bg-no-repeat ' id='merchandise'>
        <Container>
          <div className='flex flex-col items-center justify-center text-center '>
                    <h1 className='text-white text-[64px] font-bold text-center font-cinzel'>Dive Into the World of Sumptuous
Sum Dim Sum</h1>
                  
                  <p className='text-white text-[16px] mt-5 w-[850px] text-center font-raleway'>Embark on a culinary journey where every bite tells a story of tradition and passion. At Sum Dim Sum, we bring you an authentic Asian dining experience with handcrafted dishes, vibrant flavors, and the warmth of our culture. From delicate dumplings to savory
                    bites, our menu is a celebration of taste and artistry. Come, savor the joy of good food, and let
                    every dish transport you to the heart of dim sum perfection.</p>
                  
                  <button className='bg-[#B31217] text-white text-[16px] font-semibold py-3 px-5 rounded-[10px] mt-[60px] flex items-center font-raleway cursor-pointer'>Explore More
                    <HiMiniArrowLongRight className='w-5 h-5 ml-2' />
                  </button>
                  </div>
        </Container>

        </div>
  )
}

export default DivePart