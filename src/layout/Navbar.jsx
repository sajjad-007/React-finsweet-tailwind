import React from 'react'

const Navbar = () => {
  return (
    <nav className='container bg-black p-[30px]'>
        <div className="nav_wrapper flex items-center justify-center ">
            <div className="nav_logo">
                <h2>Logo</h2>
            </div>
            <div className="nav_menu"></div>
            <div className="nav_btn"></div>
        </div>
    </nav>
  )
}

export default Navbar