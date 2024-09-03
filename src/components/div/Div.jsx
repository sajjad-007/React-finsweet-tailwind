import React from 'react'

const Div = ({className,children}) => {
  return (
    <div className={className}>
        {children}
    </div>
  )
}

export default Div