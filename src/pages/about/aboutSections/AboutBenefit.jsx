import React from 'react'
import Span from '../../../components/span/Span'
import Peragraph from '../../../components/peragraph/Peragraph'
import { FaStopwatch } from 'react-icons/fa'
import { MdOutlineNoteAlt } from 'react-icons/md'
import { FaMessage } from 'react-icons/fa6'
import Image from '../../../components/Image'
import AboutSvg from '../../../components/svg/AboutSvg'
import AboutSvg2 from '../../../components/svg/AboutSvg2'

const AboutBenefit = () => {
    let pera = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
  return (
    <div  className='py-32 '>
        <div className="w-container my-0 mx-auto">
            <div className="feature_heading flex flex-col items-center gap-4 text-center">
                <h2 className='heading2 w-[630px]'>The benefits of working with us</h2>
            </div>
            <div className="feature_items flex flex-wrap gap-8 justify-between mt-12">
                <div className="item_box w-[405px] bg-accent pt-[58px] pb-[48px] pr-[48px] pl-[32px] flex flex-col gap-5">
                    <FaMessage className='text-4xl text-blue'/>
                    <h4 className='heading6'>Uses Client First</h4>
                    <Peragraph className='pera w-[324px] text-[#2829389e]' text={pera}/>
                </div>
                <div className="item_box w-[405px] bg-accent pt-[58px] pb-[48px] pr-[48px] pl-[32px] flex flex-col gap-5">
                    <FaStopwatch className='text-4xl text-blue'/>
                    <h4 className='heading6'>Uses Client First</h4>
                    <Peragraph className='pera w-[324px] text-[#2829389e]' text={pera}/>
                </div>
                <div className="item_box w-[405px] bg-accent pt-[58px] pb-[48px] pr-[48px] pl-[32px] flex flex-col gap-5">
                    <MdOutlineNoteAlt className='text-4xl text-blue'/>
                    <h4 className='heading6'>Uses Client First</h4>
                    <Peragraph className='pera w-[324px] text-[#2829389e]' text={pera}/>
                </div>
            </div>
            {/* //logo section */}
            <div className='mt-12 flex flex-wrap gap-20 items-center'>
                <div className="count flex flex-col w-44">
                    <h3 className='heading3 text-dark-blue'>100.000+</h3>
                    <Peragraph className=" Label1 capitalize text-dark-blue-lite" text='finsweet users'/>
                </div>
                <div className="logo w-[1024px] flex flex-wrap gap-14">
                    <div className="logo_item w-40 h-8 overflow-hidden">
                        <AboutSvg/>
                    </div>
                    <div className="logo_item w-40 h-8 overflow-hidden">
                        <AboutSvg2/>
                    </div>
                    <div className="logo_item w-40 h-8 overflow-hidden">
                        <AboutSvg/>
                    </div>
                    <div className="logo_item w-40 h-8 overflow-hidden">
                        <AboutSvg2/>
                    </div>
                    <div className="logo_item w-40 h-8 overflow-hidden">
                        <AboutSvg/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutBenefit