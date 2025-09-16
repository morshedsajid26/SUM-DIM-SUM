import React from 'react'

const Li = ({className,liText,href,children}) => {
  return (
    <div>
        <li className={`list-none text-white text-[16px] font-raleway ${className}`}>
            <a href={href}> {liText} </a>
            {children}
        </li>
    </div>
  )
}

export default Li