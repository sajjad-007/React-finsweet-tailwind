import React from 'react'

const Button = ({type,className,onClick,text}) => {
  return (
    <button type={type} className={className} onClick={onClick}>{text}</button>
  )
}

export default Button