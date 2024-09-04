import React from 'react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import Image from '../../../components/Image'
import AboutImg from '../../../assets/images/home/about.png'
import Peragraph from '../../../components/peragraph/Peragraph'


const HomeAbout = () => {
    let pera1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed."
    let text1 = '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."'
  return (
    <div className='py-section_padding bg-sada'>
        <div className="w-container my-0 mx-auto">
            <div className="wrapper flex flex-wrap gap-28">
                <div className="first_part w-[328px] flex flex-col gap-4">
                    <h3 className='heading3'>What our clients say about us</h3>
                    <Peragraph className='pera' text={pera1}/>
                </div>
                <div className="second_part w-[840px] flex flex-col gap-12">
                    <h5 className='heading5'>{text1}</h5>
                    <div className="bottom_part flex items-center justify-between">
                        <div className="bottom_first flex gap-3 items-center ">
                            <div className="avatar h-12 w-12 bg-blue rounded-full overflow-hidden">
                                <Image source={AboutImg} alt='not found' className='img_style'/>
                            </div>
                            <div>
                                <h5 className='label1 capitalize'>jenny wilson</h5>
                                <h6 className='text-dark-blue font-poppins text-xs leading-7 font-medium capitalize '>vice president</h6>
                            </div>
                        </div>
                        <div className="bottom_second flex gap-4">
                            <IoIosArrowDropleftCircle className='text-5xl text-blue cursor-pointer'/>
                            <IoIosArrowDroprightCircle className='text-5xl text-blue cursor-pointer'/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeAbout