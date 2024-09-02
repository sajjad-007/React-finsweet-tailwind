import React from 'react'
import Peragraph from '../../../components/headings/peragraph/Peragraph'
import Image from '../../../components/Image'
import GroupImg from '../../../assets/images/about/group.jpg'

const AboutProblem = () => {
  let pera1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
  return (
    <div className='mt-[152px] mb-[137px]'>
      <div className="w-container my-0 mx-auto">
        <div className="wrapper flex gap-[138px]">
          <div className="first_text flex flex-col gap-2 w-[595px]">
            <Peragraph className="Label1 text-dark-blue capitalize" text="about us"/>
            <h1 className='heading1 w-[595px] text-dark-blue'>Our designs solve problems</h1>
            <Peragraph className="pera w-[484px] mt-5 " text={pera1}/>          
          </div>
          <div className="img bg-red-400 h-[366px] w-[547px] overflow-hidden ">
            <Image source={GroupImg} alt='not found' className='img_style'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutProblem