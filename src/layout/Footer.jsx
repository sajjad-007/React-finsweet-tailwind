import React from 'react'
import { NavLink } from 'react-router-dom'
import footImg from '../../public/images/navlogo.png'
const Footer = () => {
  let para = 'We are always open to discuss your project and improve your online presence.'
  return (
    <footer className='mt-32'>
      <div className='with'>
        <div className="footer_one bg-primary pt-[100px] pr-[220px] flex items-center gap-[141px]">
          <div className="fins_part bg-red-400 ">
            <div className="head">
              <img src={footImg} alt="not found" />
              <p className='pera w-[400px] mt-[22px]'>{para}</p>
            </div>
            <div className="foot w-[517px] bg-secondary py-4 pl-[37px] pr-[137px]">
              <div>
                <h6 className='pera leading-8 text-primary'>Email me at</h6>
                <p className='pera text-primary font-normal'>contact@website.com</p>
              </div>
            </div>
          </div>
          <div className="talk_part bg-green-400 ">hi</div>
        </div>
        <div className="footer_two bg-white py-8 flex item-center justify-between gap-[562px]">
          <p className='foot_anchor'>Copyright 2022, Finsweet.com</p>
          <ul className='flex items-center justify-center gap-8'>
            <li>
              <NavLink to="/" className='foot_anchor'>home</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" className='foot_anchor'>about us</NavLink>
            </li>
            <li>
              <NavLink to="/features" className='foot_anchor'>features</NavLink>
            </li>
            <li>
              <NavLink to="/faq" className='foot_anchor'>FAQ</NavLink>   
            </li>
            <li>
              <NavLink to="/blog" className='foot_anchor'>blog</NavLink>
            </li>         
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer