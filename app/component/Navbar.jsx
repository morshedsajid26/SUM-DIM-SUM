import React from 'react'
import Container from './Container'
import Image from 'next/image'
import logo from '/public/NavLogo.png'
import Link from 'next/link'


const Navbar = () => {
      const navlink = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Destination', link: '/destination' },
    { name: 'Tips', link: '/tips' },
    { name: 'Contact', link: '/contact' }
  ];

  return (
    <div className='bg-black py-[25px]'>
        <Container>
            <div className="logo">
                <Image src={logo} alt="logo"/>
            </div>
            <div className="menu text-white">
                {navlink.map(({name, link}) => {
             
             

            
              <Link
                key={name}
                href={link}
                
              >
                {name}
              </Link>
            
          })}
                
            </div>
            <div className="button"></div>
        </Container>
    </div>
  )
}

export default Navbar