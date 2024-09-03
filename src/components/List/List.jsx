import React from 'react'

const List = ({className,children}) => {
  return (
    <li className={className}>
        {children}
    </li>
  )
}

export default List