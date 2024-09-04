import React from 'react'
import Peragraph from '../../../components/peragraph/Peragraph'
import Image from '../../../components/Image'
import SingleImg from '../../../assets/images/about/single.jpg'


const FeatureClint = () => {
    let head3 = "Top agencies and freelancers around the world use Client-first "
    let pera1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  return (
    <div className="py-32">
        <div className="w-container my-0 mx-auto">
            <div className="section1 flex flex-wrap gap-20 ">
                <div className="content_part flex flex-col gap-4 w-[624px] mt-[54px]">
                    <h6 className='label2 capitalize text-dark-blue font-medium'>Use Client-first</h6>
                    <h3 className='heading3 capitalize w-[623px]'>{head3}</h3>
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

export default FeatureClint