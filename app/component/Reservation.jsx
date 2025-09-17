"use client";
import React, { useState } from 'react'
import Container from './Container'
import Image from 'next/image'
import reservation from '/public/reservation.png'
import { IoIosArrowDown } from "react-icons/io";

const Reservation = () => {
    let [person,setPerson]=useState(false);
    let [personValue,setPersonValue]=useState("1 Person");
    let [date,setDate]=useState(false);
    let [dateValue,setDateValue]=useState("21-12-2024");
    let [time,setTime]=useState(false);
    let [timeValue,setTimeValue]=useState("09:00 AM");

     const persons = [ "2 Persons", "3 Persons", "4 Persons", "5 Persons"];
     const dates = [
  "22-12-2024",
  "23-12-2024",
  "24-12-2024",
  "25-12-2024"
];

const times=[
    "07:00 AM",
    "08:00 AM",
    "10:00 AM",
    "11:00 AM",
    
]
  return (
    <div className='pt-[120px] '>
        <Container className='flex  justify-between'>
        <div className="right w-[558px] relative">
            <div className='relativ border border-[#B31217] rounded-[20px] w-[468px] h-[514px] '></div>
            <Image className='absolute top-[26px] left-6 ' src={reservation} alt='reservation'/>
        </div>
        <div className="left w-[700px]">
            <h3 className='font-cinzel text-[32px] font-bold text-[#0C0C0C]'>Reserve Your Table for an Authentic
Sum Dim Sum Experience</h3>

            <p className='font-raleway text-[16px] text-[#0C0C0C] mt-5'>Don’t miss the chance to savor the finest flavors of authentic dim sum in a warm and inviting atmosphere. Whether it’s a special occasion, a family gathering, or a cozy dinner for two, our handcrafted dishes and impeccable service make every moment memorable. Reserve your table now and let us take you on a culinary journey filled with tradition, passion, and the joy of exceptional food. Your unforgettable dining experience awaits!</p>

            <form className=''>
                <div className='grid grid-cols-2 grid-rows-2 mt-[60px] gap-x-6 gap-y-20'>
                <input className='outline-none border-b w-[338px] font-poppins text-[16px] text-[#0C0C0C] placeholder-[#0C0C0C] border-[#0C0C0C] pb-3' type="text " placeholder='Your Name' />
               
               <div className='relative'>
                <div onClick={()=>setPerson(!person)} className='flex items-center justify-between cursor-pointer'>
                    <input className='outline-none border-b w-[338px] font-poppins text-[16px] text-[#0C0C0C] placeholder-[#0C0C0C] border-[#0C0C0C] pb-3' type="text " placeholder={personValue} />
               {person? <IoIosArrowDown className='absolute top-1/2 right-0 -translate-y-1/2 w-6 h-6 rotate-180' />:<IoIosArrowDown className='absolute top-1/2 right-0 -translate-y-1/2 w-6 h-6 ' />
               }
               </div>
                <div
                value={person}
                onChange={(e) => setPerson(e.target.value)}
                className={` w-full  font-poppins text-[16px] text-[#0C0C0C]  absolute ${person?"opacity-100 h-auto visible overflow-auto ":"opacity-0 h-0 invisible overflow-hidden"}`}>
                     {persons.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setPersonValue(item);
                        setPerson(false);
                      }}
                      className="py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
               </div>

               <div className='relative'>
                <div onClick={()=>setDate(!date)} className='flex items-center justify-between cursor-pointer'>
                    <input className='outline-none border-b w-[338px] font-poppins text-[16px] text-[#0C0C0C] placeholder-[#0C0C0C] border-[#0C0C0C] pb-3' type="text " placeholder={dateValue} />
               {date? <IoIosArrowDown className='absolute top-1/2 right-0 -translate-y-1/2 w-6 h-6 rotate-180' />:<IoIosArrowDown className='absolute top-1/2 right-0 -translate-y-1/2 w-6 h-6 ' />
               }
               </div>
                <div
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={` w-full  font-poppins text-[16px] text-[#0C0C0C]  absolute ${date?"opacity-100 h-auto visible overflow-auto ":"opacity-0 h-0 invisible overflow-hidden"}`}>
                     {dates.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setDateValue(item);
                        setDate(false);
                      }}
                      className="py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
               </div>


               <div className='relative'>
                <div onClick={()=>setTime(!time)} className='flex items-center justify-between cursor-pointer'>
                    <input className='outline-none border-b w-[338px] font-poppins text-[16px] text-[#0C0C0C] placeholder-[#0C0C0C] border-[#0C0C0C] pb-3' type="text " placeholder={timeValue} />
               {time? <IoIosArrowDown className='absolute top-1/2 right-0 -translate-y-1/2 w-6 h-6 rotate-180' />:<IoIosArrowDown className='absolute top-1/2 right-0 -translate-y-1/2 w-6 h-6 ' />
               }
               </div>
                <div
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={` w-full  font-poppins text-[16px] text-[#0C0C0C]  absolute ${time?"opacity-100 h-auto visible overflow-auto ":"opacity-0 h-0 invisible overflow-hidden"}`}>
                     {times.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setTimeValue(item);
                        setTime(false);
                      }}
                      className="py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
               </div>
               
                </div>
            </form>
        </div>

        </Container>
    </div>
  )
}

export default Reservation