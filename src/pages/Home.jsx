import React from 'react'
import Peragraph from '../components/headings/peragraph/Peragraph'
import Button from '../components/button/Button'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Image from '../components/Image';
import HeadingOneImg from '../assets/images/home/heading_img.png'
import HowImg from '../assets/images/home/how.svg'
import { FaArrowRightLong } from "react-icons/fa6";
import Span from '../components/span/Span';

const Home = () => {
  // text section
  let head1 = 'Building stellar websites for early startups'
  let pera1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  return (
    <>
      {/* // ====== Building section Start ==== */}
      <div className='bg-primary py-section_padding'>
        <div className="w-container my-0 mx-auto">
          <div className="wrapper flex gap-16">
            <div className="section1 flex flex-col gap-6 w-[582px]">
              <h1 className=' heading1 text-sada'>{head1}</h1>
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
      {/* // ====== Building section End ==== */}

    
      {/* // ====== Work section Start ==== */}
      <div className='bg-sada py-section_padding'>
        <div className="w-container my-0 mx-auto">
          <div className="work_wrapper flex gap-[142px]">
            <div className="heading_section flex flex-col gap-4 w-[405px] items-start">
              <h2 className='heading2 text-'>How we work</h2>
              <Peragraph text={pera1}/>
              <div>
                <Button className='Label1 flex items-center justify-center gap-5' text='Get in touch with us' Children={<FaArrowRightLong />}/>
              </div>
            </div>
            <div className="item_section w-[733px] flex flex-wrap gap-6">
              <div className="item1 w-[303px] flex flex-col gap-3">
                <div className='w-12 h-12 overflow-hidden bg-blue rounded-md relative'>
                  <Image source={HowImg}/>
                  <Span className='text-sada absolute right-4 top-2 z-20 font-medium' text='01'/>
                </div>
                <h5 className='heading5'>strategy</h5>
                <Peragraph className='pera text-dark-blue' text={pera1}/>
              </div>
              <div className="item1 w-[303px] flex flex-col gap-3">
                <div className='w-12 h-12 overflow-hidden bg-blue rounded-md relative'>
                  <Image source={HowImg}/>
                  <Span className='text-sada absolute right-4 top-2 z-20 font-medium' text='02'/>
                </div>
                <h5 className='heading5'>environment</h5>
                <Peragraph className='pera text-dark-blue' text={pera1}/>
              </div>
              <div className="item1 w-[303px] flex flex-col gap-3">
                <div className='w-12 h-12 overflow-hidden bg-blue rounded-md relative'>
                  <Image source={HowImg}/>
                  <Span className='text-sada absolute right-4 top-2 z-20 font-medium' text='03'/>
                </div>
                <h5 className='heading5'>design</h5>
                <Peragraph className='pera text-dark-blue' text={pera1}/>
              </div>
              <div className="item1 w-[303px] flex flex-col gap-3">
                <div className='w-12 h-12 overflow-hidden bg-blue rounded-md relative'>
                  <Image source={HowImg}/>
                  <Span className='text-sada absolute right-4 top-2 z-20 font-medium' text='04'/>
                </div>
                <h5 className='heading5'>development</h5>
                <Peragraph className='pera text-dark-blue' text={pera1}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // ====== Work section End ==== */}

      {/* // ====== Building section Start ==== */}
      {/* // ====== Building section End ==== */}

      {/* // ====== Building section Start ==== */}
      {/* // ====== Building section End ==== */}

      {/* // ====== Building section Start ==== */}
      {/* // ====== Building section End ==== */}

      {/* // ====== Building section Start ==== */}
      {/* // ====== Building section End ==== */}
    </>
    
  )
}

export default Home