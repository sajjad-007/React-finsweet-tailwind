import React from 'react'
import Peragraph from '../../../components/peragraph/Peragraph'
import Image from '../../../components/Image'
import SingleImg from '../../../assets/images/about/single.jpg'
import GroupImg from '../../../assets/images/about/group.jpg'

const AboutInspire = () => {
    let pera1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  return (
    <div className='py-32 bg-accent'>
        <div className="w-container my-0 mx-auto">
            <div className="main_wrapper flex flex-col gap-24">
                {/* item sets */}
                <div className="sub_wrapper flex flex-col gap-24">
                    <div className="section1 flex flex-wrap gap-36 ">
                        <div className="content_part flex flex-col gap-4 w-[623px] mt-[54px]">
                            <h6 className='label2 capitalize text-dark-blue font-medium'>our mission</h6>
                            <h3 className='heading3 capitalize w-[623px]'>Inspire, Innovate, Share</h3>
                            <Peragraph className='pera w-[623px]' text={pera1}/>
                        </div>
                        <div className="Img_part w-[513px] h-[336px] overflow-hidden">
                            <Image className='h-full w-full object-cover bg-no-repeat' source={SingleImg} alt='not found'/>
                        </div>
                    </div>
                    <div className="section1 flex flex-wrap gap-36">
                        <div className="Img_part w-[513px] h-[336px] overflow-hidden">
                            <Image className='h-full w-full object-cover bg-no-repeat' source={GroupImg} alt='not found'/>
                        </div>
                        <div className="content_part flex flex-col gap-4 w-[623px] mt-[54px]">
                            <h6 className='label2 capitalize text-dark-blue font-medium'>our mission</h6>
                            <h3 className='heading3 capitalize w-[623px]'>laser focus</h3>
                            <Peragraph className='pera w-[623px]' text={pera1}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutInspire