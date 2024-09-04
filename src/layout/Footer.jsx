import React from 'react'
import { NavLink } from 'react-router-dom'
import footImg from '../../public/images/navlogo.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import LogoSvg from '../components/logo/LogoSvg';
import Peragraph from '../components/peragraph/Peragraph';



const Footer = () => {
  let para = 'We are always open to discuss your project and improve your online presence.'
  let talkPera = 'We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.'
  return (
    <>
    <footer className='mt-32 bg-primary'>
      <div className='w-container my-0 mx-auto '>
        <div className="footer_wrapper  pr-[220px] flex items-center  gap-[141px]">
          <div className="fins_part pt-[100px]">
            <div className="head">
              {/* <img src={footImg} alt="not found" /> */}
              <LogoSvg/>
              <p className='pera w-[400px] mt-[22px] mb-20'>{para}</p>
            </div>
            <div className="foot w-[517px] bg-secondary py-4 pl-[37px] pr-[137px] flex gap-7">
              <div>
                <h6 className='pera leading-8 text-primary capitalize'>Email me at</h6>
                <p className='pera text-primary font-normal'>contact@website.com</p>
              </div>
              <div>
                <h6 className='pera leading-8 text-primary capitalize'>call us</h6>
                <p className='pera text-primary font-normal'>0927 6277 28525</p>
              </div>
            </div>
          </div>
          <div className="talk_part flex flex-col gap-5 py-[70px]">
            <h2 className='heading2 text-sada'>Lets Talk!</h2>
            <Peragraph className='pera text-[#f4f6fcca]' text={talkPera}/>
            <div className="icons flex gap-7">
              <div className="icon1 h-4 w-4 text-sada text-xl">
                <FaFacebook />
              </div>
              <div className="icon1 h-4 w-4 text-sada text-xl">
                <FaTwitter />
              </div>
              <div className="icon1 h-4 w-4 text-sada text-xl">
                <FaInstagram />
              </div>
              <div className="icon1 h-4 w-4 text-sada text-xl">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* //second footer */}
    <footer>
      <div className='w-container mx-auto'>
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
    </>
  )
}

export default Footer