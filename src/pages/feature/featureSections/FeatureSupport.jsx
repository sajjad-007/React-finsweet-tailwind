import React from 'react'
import Peragraph from '../../../components/peragraph/Peragraph'
import SingleImg from '../../../assets/images/feature/feature3.png'
import Image from '../../../components/Image'

const FeatureSupport = () => {
    let pera1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    let head1 ="Working with us, you will be getting 24/7 priority support"
  return (
    <div className='py-32 bg-sada'>
        <div className="w-container my-0 mx-auto">
            <div className="section1 flex flex-wrap gap-20 ">
                <div className="content_part flex flex-col gap-4 w-[624px] mt-[54px]">
                    <h6 className='label2 capitalize text-dark-blue font-medium'>24/7 Support
                    </h6>
                    <h3 className='heading3 capitalize w-[623px]'>{head1}</h3>
                    <Peragraph className='pera w-full' text={pera1}/>
                </div>
                <div className="Img_part w-[575px] h-[398px] overflow-hidden">
                    <Image className='h-full w-full object-cover bg-no-repeat' source={SingleImg} alt='not found'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureSupport