import React from 'react'

const Image = ({source,alt,className}) => {
  return (
    <>
        <img src={source} alt={alt} className={className} />
    </>
  )
}

export default Image