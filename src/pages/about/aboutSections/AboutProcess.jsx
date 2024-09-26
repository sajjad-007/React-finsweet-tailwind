import React from 'react'
import Span from '../../../components/span/Span'
import Peragraph from '../../../components/peragraph/Peragraph'

const AboutProcess = () => {
    let pera1 = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
  return (
    <div className='my-32'>
        <div className="w-container my-0 mx-auto">
            <div className='wrapper flex flex-col gap-16'>
                <h2 className='heading2 mx-auto'>The process we follow</h2>
                <div className="process_main flex flex-wrap gap-6 items-center justify-between">
                    <div className="item_box flex flex-col w-[296px]">
                        <div className='circle flex gap-6 items-center '>
                            <div className="div h-6 w-6 bg-blue rounded-full ">
                            </div>
                            <Span className='h-1 w-[224px] bg-[#2505f297] decoration-dotted'/>
                        </div>
                        <h6 className='heading6 w-72 mt-8 mb-2'>planning</h6>
                        <Peragraph className='pera w-64' text={pera1}/>
                    </div>
                    {/* //item boxes*/}
                    <div className="item_box flex flex-col w-[296px]">
                        <div className='circle flex gap-6 items-center '>
                            <div className="div h-6 w-6 bg-blue rounded-full ">
                            </div>
                            <Span className='h-1 w-[224px] bg-[#2505f297] decoration-dotted'/>
                        </div>
                        <h6 className='heading6 w-72 mt-8 mb-2'>conception</h6>
                        <Peragraph className='pera w-64' text={pera1}/>
                    </div>
                    {/* //item boxes*/}
                    <div className="item_box flex flex-col w-[296px]">
                        <div className='circle flex gap-6 items-center '>
                            <div className="div h-6 w-6 bg-blue rounded-full ">
                            </div>
                            <Span className='h-1 w-[224px] bg-[#2505f297] decoration-dotted'/>
                        </div>
                        <h6 className='heading6 w-72 mt-8 mb-2'>design</h6>
                        <Peragraph className='pera w-64' text={pera1}/>
                    </div>
                    {/* //item boxes*/}
                    <div className="item_box flex flex-col w-[296px]">
                        <div className='circle flex gap-6 items-center '>
                            <div className="div h-6 w-6 bg-blue rounded-full ">
                            </div>
                            <Span className='h-1 w-[224px] bg-[#2505f297] decoration-dotted'/>
                        </div>
                        <h6 className='heading6 w-72 mt-8 mb-2'>development</h6>
                        <Peragraph className='pera w-64' text={pera1}/>
                    </div>
                    {/* //item boxes*/}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutProcess