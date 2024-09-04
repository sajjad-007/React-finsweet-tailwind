import React from 'react'
import Div from '../../../components/div/Div'
import { ImCross } from 'react-icons/im'
import { FaPlus } from 'react-icons/fa'
import Span from '../../../components/span/Span'
import Peragraph from '../../../components/peragraph/Peragraph'

const FeatureFaq = () => {
    let pera = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  return (
    <Div className='py-32'>
        <Div className="w-container my-0 mx-auto">
            <Div className="faq_wrapper flex gap-[136px]">
                    <Div className="faq_first w-[328px] flex flex-col gap-4">
                        <h3 className='heading3'>Frequently asked questions</h3>
                        <h6 className='label1 text-blue'>Contact us for more info</h6>
                    </Div>
                    <Div className="faq_second w-[816px] ">
                        <Div className="main_item flex flex-col gap-8 ">
                            <Div className="item_box flex justify-between  pb-7 border-b-2 border-[#2829387e]">
                                <Div className='flex gap-14'>
                                    <Span className="heading6 text-blue" text='01'/>
                                    <Div className='flex justify-between items-start'>
                                        <Div className="content flex flex-col gap-4">
                                            <h6 className='heading6'>How much time does it take?</h6>
                                            <Peragraph className='w-[624px] pera' text={pera}/>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div className="icon ">
                                    <ImCross className='text-[#2829387e] cursor-pointer'/>
                                </Div>
                            </Div>
                            {/* //next item */}
                            <Div className="item_box flex justify-between  pb-7 border-b-2 border-[#2829387e]">
                                <Div className='flex gap-14'>
                                    <Span className="heading6 text-blue" text='02'/>
                                    <Div className='flex justify-between items-start'>
                                        <Div className="content flex flex-col gap-4">
                                            <h6 className='heading6'>How much time does it take?</h6>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div className="icon ">
                                    <FaPlus className='text-[#2829387e] text-xl cursor-pointer'/>
                                </Div>
                            </Div>
                            {/* // next item */}
                            
                            {/* // next item */}
                            <Div className="item_box flex justify-between  pb-7 border-b-2 border-[#2829387e]">
                                <Div className='flex gap-14'>
                                    <Span className="heading6 text-blue" text='03'/>
                                    <Div className='flex justify-between items-start'>
                                        <Div className="content flex flex-col gap-4">
                                            <h6 className='heading6'>How much time does it take?</h6>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div className="icon ">
                                    <FaPlus className='text-[#2829387e] text-xl cursor-pointer'/>
                                </Div>
                            </Div>
                            {/* // next item */}
                            <Div className="item_box flex justify-between  pb-7 border-b-2 border-[#2829387e]">
                                <Div className='flex gap-14'>
                                    <Span className="heading6 text-blue" text='04'/>
                                    <Div className='flex justify-between items-start'>
                                        <Div className="content flex flex-col gap-4">
                                            <h6 className='heading6'>How much time does it take?</h6>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div className="icon ">
                                    <FaPlus className='text-[#2829387e] text-xl cursor-pointer'/>
                                </Div>
                            </Div>
                            {/* // next item */}
                            <Div className="item_box flex justify-between  pb-7 border-b-2 border-[#2829387e]">
                                <Div className='flex gap-14'>
                                    <Span className="heading6 text-blue" text='05'/>
                                    <Div className='flex justify-between items-start'>
                                        <Div className="content flex flex-col gap-4">
                                            <h6 className='heading6'>How much time does it take?</h6>
                                        </Div>
                                    </Div>
                                </Div>
                                <Div className="icon ">
                                    <FaPlus className='text-[#2829387e] text-xl cursor-pointer'/>
                                </Div>
                            </Div>
                            {/* // next item */}
                        </Div>
                    </Div>
            </Div>
        </Div>
    </Div>
  )
}

export default FeatureFaq