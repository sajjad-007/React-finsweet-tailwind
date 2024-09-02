import React from 'react'
import Peragraph from '../../../components/headings/peragraph/Peragraph'
import Image from '../../../components/Image'
import SingleImg from '../../../assets/images/about/double.jpg'

const AboutFocus = () => {
    let pera1 ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  return (
    <div>
        <div className="w-container my-0 mx-auto">
            <div className="wrapper bg-[#F4F5F5] py-20 pr-20 pl-24 flex flex-wrap gap-14 justify-around">
                <div className="first felx flex-col gap-2 w-[515px]">
                    <h6 className='label2 text-dark-blue '>Who we are </h6>
                    <h3 className='heading3 capitalize'>goal focussed</h3>
                    <Peragraph text={pera1} className=' pera'/>
                </div>
                <div className="second flex flex-col gap-2 w-[515px] mt-[28px]">
                    <h3 className='heading3 capitalize'>Continuous improvement</h3>
                    <Peragraph text={pera1} className=' pera'/>
                </div>
            </div>
            <div className="img_section h-[360px] w-full overflow-hidden">
                <Image source={SingleImg} alt='not found' className='h-full w-full object-cover bg-no-repeat'/>
            </div>
        </div>
    </div>
  )
}

export default AboutFocus