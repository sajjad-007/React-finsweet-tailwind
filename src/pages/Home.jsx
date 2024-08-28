import React from 'react'
import Peragraph from '../components/headings/peragraph/Peragraph'
import Button from '../components/button/Button'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Image from '../components/Image';
import HeadingOneImg from '../assets/images/home/heading_img.png'
// import HeadingImg from '../assets/images/heading_img.png'
const Home = () => {
  // text section
  let head1 = 'Building stellar websites for early startups'
  let pera1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  return (
    // ====== Building section Start ====
    <div className='bg-primary py-section_padding'>
      <div className="w-container my-0 mx-auto">
        <div className="wrapper flex gap-16">
          <div className="section1 flex flex-col gap-6 w-[582px]">
            <h1 className=' heading1'>{head1}</h1>
            <Peragraph className='w-full text-sada' text={pera1}/>
            <div className='btn_section flex gap-4'>
              <Button  className='nav_btn2' text='view our work' />
              <Button  className='nav_btn' text='view pricing' />
            </div>
          </div>
          <div className="section2 w-[634px] overflow-hidden">
            <Image source={HeadingOneImg} alt='not found' className='image_style'/>
          </div>
        </div>
      </div>      
    </div>
    // ====== Building section End ====

    
    // ====== Work section Start ====
    // ====== Work section End ====

    // ====== Building section Start ====
    // ====== Building section End ====

    // ====== Building section Start ====
    // ====== Building section End ====

    // ====== Building section Start ====
    // ====== Building section End ====

    // ====== Building section Start ====
    // ====== Building section End ====
  )
}

export default Home