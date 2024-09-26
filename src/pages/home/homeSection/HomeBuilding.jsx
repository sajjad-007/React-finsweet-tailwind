import React from 'react'
import HeadingOneImg from '../../../assets/images/home/heading_img.png'
import Peragraph from '../../../components/peragraph/Peragraph';
import Button from '../../../components/button/Button';
import Image from '../../../components/Image';
import { useNavigate } from "react-router-dom";


const HomeBuilding = () => {
  const navigate = useNavigate();
  let handlePrice = ()=>{
    navigate("/pricing")
    
  }
  let handleWork = ()=>{
    navigate("/features")
    
  }
    let head1 = 'Building stellar websites for early startups'
    let pera1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
  return (
    <div className='bg-primary py-section_padding'>
        <div className="w-container my-0 mx-auto">
          <div className="wrapper flex gap-16">
            <div className="section1 flex flex-col gap-6 w-[582px]">
              <h1 className=' heading1 text-sada'>{head1}</h1>
              <Peragraph className='w-full text-sada' text={pera1}/>
              <div className='btn_section flex gap-4'>
                <Button  className='nav_btn2' text='view our work' onClick={handleWork}/>
                <Button  className='nav_btn' text='view pricing' onClick={handlePrice}/>
              </div>
            </div>
            <div className="section2 w-[634px] overflow-hidden">
              <Image source={HeadingOneImg} alt='not found' className='image_style'/>
            </div>
          </div>
        </div>      
    </div>  
  )
}

export default HomeBuilding