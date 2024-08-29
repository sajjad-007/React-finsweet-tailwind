import React from 'react'

const Image = ({source,alt,className,children}) => {
  return (
    <>
        <img src={source} alt={alt} className={className}/>
    </>
  )
}

export default Image