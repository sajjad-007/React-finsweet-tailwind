import React from 'react'
import { FaMessage, FaStopwatch } from 'react-icons/fa6'
import Peragraph from '../../../components/peragraph/Peragraph'
import { MdOutlineNoteAlt } from 'react-icons/md'
import Div from '../../../components/div/Div'

const FeatureBenefit = () => {
    let pera = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
  return (
    <Div>
        <Div className="w-container my-0 mx-auto">
        <Div className="feature_heading flex flex-col items-center gap-4 text-center">
                <h2 className='heading2 w-[630px]'>The benefits of working with us</h2>
            </Div>
            <Div className="feature_items flex flex-wrap gap-8 justify-between mt-12">
                <Div className="item_box w-[405px] bg-accent pt-[58px] pb-[48px] pr-[48px] pl-[32px] flex flex-col gap-5">
                    <FaMessage className='text-4xl text-blue'/>
                    <h4 className='heading6'>Uses Client First</h4>
                    <Peragraph className='pera w-[324px] text-[#2829389e]' text={pera}/>
                </Div>
                <Div className="item_box w-[405px] bg-accent pt-[58px] pb-[48px] pr-[48px] pl-[32px] flex flex-col gap-5">
                    <FaStopwatch className='text-4xl text-blue'/>
                    <h4 className='heading6'>Uses Client First</h4>
                    <Peragraph className='pera w-[324px] text-[#2829389e]' text={pera}/>
                </Div>
                <Div className="item_box w-[405px] bg-accent pt-[58px] pb-[48px] pr-[48px] pl-[32px] flex flex-col gap-5">
                    <MdOutlineNoteAlt className='text-4xl text-blue'/>
                    <h4 className='heading6'>Uses Client First</h4>
                    <Peragraph className='pera w-[324px] text-[#2829389e]' text={pera}/>
                </Div>
            </Div>
        </Div>
    </Div>
  )
}

export default FeatureBenefit