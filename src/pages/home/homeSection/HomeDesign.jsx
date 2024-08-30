import React from 'react'
import Span from '../../../components/span/Span'
import { CgProfile } from 'react-icons/cg'
import Peragraph from '../../../components/headings/peragraph/Peragraph'
import { FaCheckCircle, FaPencilRuler, FaStopwatch } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import { MdOutlineNoteAlt } from 'react-icons/md'

const HomeDesign = () => {
    let pera = "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
  return (
    <div className='py-section_padding bg-pera'>
        <div className='w-container mx-auto my-0'>
            <div className="feature_heading flex flex-col items-center gap-4 text-center">
                <Span className='sub_heading' text='features'/>
                <h2 className='heading2 w-[630px]'>Design that solves problems, one product at a time</h2>
            </div>
            <div className="feature_items flex flex-wrap gap-8 justify-between mt-12">
                <div className="item_box w-[405px] bg-sada pt-[58px] pb-[48px] pr-[48px] pl-[32px] flex flex-col gap-5">
                    <CgProfile className='text-4xl text-blue'/>
                    <h4 className='heading6'>Uses Client First</h4>
                    <Peragraph className='pera w-[324px] text-[#2829389e]' text={pera}/>
                </div>
                <div className="item_box w-[405px] bg-sada pt-[58px] pb-[48px] pr-[48px] pl-[32px] flex flex-col gap-5">
                    <FaCheckCircle className='text-4xl text-blue'/>
                    <h4 className='heading6'>Uses Client First</h4>
                    <Peragraph className='pera w-[324px] text-[#2829389e]' text={pera}/>
                </div>
                <div className="item_box w-[405px] bg-sada pt-[58px] pb-[48px] pr-[48px] pl-[32px] flex flex-col gap-5">
                    <FaPencilRuler className='text-4xl text-blue'/>
                    <h4 className='heading6'>Uses Client First</h4>
                    <Peragraph className='pera w-[324px] text-[#2829389e]' text={pera}/>
                </div>
                <div className="item_box w-[405px] bg-sada pt-[58px] pb-[48px] pr-[48px] pl-[32px] flex flex-col gap-5">
                    <FaMessage className='text-4xl text-blue'/>
                    <h4 className='heading6'>Uses Client First</h4>
                    <Peragraph className='pera w-[324px] text-[#2829389e]' text={pera}/>
                </div>
                <div className="item_box w-[405px] bg-sada pt-[58px] pb-[48px] pr-[48px] pl-[32px] flex flex-col gap-5">
                    <FaStopwatch className='text-4xl text-blue'/>
                    <h4 className='heading6'>Uses Client First</h4>
                    <Peragraph className='pera w-[324px] text-[#2829389e]' text={pera}/>
                </div>
                <div className="item_box w-[405px] bg-sada pt-[58px] pb-[48px] pr-[48px] pl-[32px] flex flex-col gap-5">
                    <MdOutlineNoteAlt className='text-4xl text-blue'/>
                    <h4 className='heading6'>Uses Client First</h4>
                    <Peragraph className='pera w-[324px] text-[#2829389e]' text={pera}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeDesign