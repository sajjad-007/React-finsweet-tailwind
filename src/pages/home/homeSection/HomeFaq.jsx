import React from 'react'
import Span from '../../../components/span/Span'
import Peragraph from '../../../components/headings/peragraph/Peragraph'
import { ImCross } from 'react-icons/im'
import { FaPlus } from 'react-icons/fa6'

const HomeFaq = () => {
    let pera = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  return (
    <div className='py-section_padding'>
        <div className='w-container my-0 mx-auto'>
            <div className="faq_wrapper flex gap-[136px]">
                <div className="faq_first w-[328px] flex flex-col gap-4">
                    <h3 className='heading3'>Frequently asked questions</h3>
                    <h6 className='label1 text-blue'>Contact us for more info</h6>
                </div>
                <div className="faq_second w-[816px] ">
                    <div className="main_item flex flex-col gap-8 ">
                        <div className="item_box flex justify-between  pb-7 border-b-2 border-[#2829387e]">
                            <div className='flex gap-14'>
                                <Span className="heading6 text-blue" text='01'/>
                                <div className='flex justify-between items-start'>
                                    <div className="content flex flex-col gap-4">
                                        <h6 className='heading6'>How much time does it take?</h6>
                                        <Peragraph className='w-[624px] pera' text={pera}/>
                                    </div>
                                </div>
                            </div>
                            <div className="icon ">
                                <ImCross className='text-[#2829387e] cursor-pointer'/>
                            </div>
                        </div>
                        {/* //next item */}
                        <div className="item_box flex justify-between  pb-7 border-b-2 border-[#2829387e]">
                            <div className='flex gap-14'>
                                <Span className="heading6 text-blue" text='02'/>
                                <div className='flex justify-between items-start'>
                                    <div className="content flex flex-col gap-4">
                                        <h6 className='heading6'>How much time does it take?</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="icon ">
                                <FaPlus className='text-[#2829387e] text-xl cursor-pointer'/>
                            </div>
                        </div>
                        {/* // next item */}
                        
                        {/* // next item */}
                        <div className="item_box flex justify-between  pb-7 border-b-2 border-[#2829387e]">
                            <div className='flex gap-14'>
                                <Span className="heading6 text-blue" text='03'/>
                                <div className='flex justify-between items-start'>
                                    <div className="content flex flex-col gap-4">
                                        <h6 className='heading6'>How much time does it take?</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="icon ">
                                <FaPlus className='text-[#2829387e] text-xl cursor-pointer'/>
                            </div>
                        </div>
                        {/* // next item */}
                        <div className="item_box flex justify-between  pb-7 border-b-2 border-[#2829387e]">
                            <div className='flex gap-14'>
                                <Span className="heading6 text-blue" text='04'/>
                                <div className='flex justify-between items-start'>
                                    <div className="content flex flex-col gap-4">
                                        <h6 className='heading6'>How much time does it take?</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="icon ">
                                <FaPlus className='text-[#2829387e] text-xl cursor-pointer'/>
                            </div>
                        </div>
                        {/* // next item */}
                        <div className="item_box flex justify-between  pb-7 border-b-2 border-[#2829387e]">
                            <div className='flex gap-14'>
                                <Span className="heading6 text-blue" text='05'/>
                                <div className='flex justify-between items-start'>
                                    <div className="content flex flex-col gap-4">
                                        <h6 className='heading6'>How much time does it take?</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="icon ">
                                <FaPlus className='text-[#2829387e] text-xl cursor-pointer'/>
                            </div>
                        </div>
                        {/* // next item */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeFaq