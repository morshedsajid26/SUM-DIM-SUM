import React from 'react'

const Li = ({className,liText}) => {
  return (
    <div>
        <li className={`list-none text-white text-[16px] font-raleway ${className}`}>
            <a href='#'> {liText} </a>
            
        </li>
    </div>
  )
}

export default Li