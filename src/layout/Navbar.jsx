import React from 'react'
import { NavLink } from 'react-router-dom'
import navlogo from '../../public/images/navlogo.png'
import './navbar.css'
import LogoSvg from '../components/logo/LogoSvg'


const Navbar = () => {
  return (
    // ====== Navbar section ======
    <nav className=' bg-primary text-white py-4 '>
        <div className='w-container my-0 mx-auto'>
          <div className='nav_wrapper flex items-center justify-between '>
            <div className="nav_logo">
              {/* <img src={navlogo} alt="" /> */}
              <LogoSvg/>
            </div>
              <div className="nav_menu flex items-center justify-between gap-12">
                <ul className='flex items-center justify-center gap-8'>
                    <li>
                      <NavLink to="/" className='nav_anchor'>home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/aboutus" className='nav_anchor'>about us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/features" className='nav_anchor'>features</NavLink>
                    </li>
                    <li>
                      <NavLink to="/faq" className='nav_anchor'>FAQ</NavLink>   
                    </li>
                    <li>
                      <NavLink to="/blog" className='nav_anchor'>blog</NavLink>
                    </li>
                </ul>
                <div className="nav_btn">contact us</div>
              </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar