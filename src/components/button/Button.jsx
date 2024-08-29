import React, { Children } from 'react'

const Button = ({type,className,onClick,text,Children}) => {
  return (
    <button type={type} className={className} onClick={onClick}>{text}{Children}</button>
  )
}

export default Button