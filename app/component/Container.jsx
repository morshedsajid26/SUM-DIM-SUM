import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`md:max-w-[1320px] max-w-[450px] mx-auto ${className}`}>
        {children}
    </div>
  )
}

export default Container