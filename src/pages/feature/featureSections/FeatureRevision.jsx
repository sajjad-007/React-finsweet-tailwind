import React from 'react'
import Image from '../../../components/Image'
import Peragraph from '../../../components/peragraph/Peragraph'
import GroupImg from '../../../assets/images/about/group.jpg'

const FeatureRevision = () => {
     let pera1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
     let head1 ="Get free Revisions and one week of free maintenance"
  return (
    <div className='py-32 bg-accent'>
        <div className="w-container my-0 mx-auto">
            <div className="section1 flex flex-wrap gap-36 items-center">
                <div className="Img_part w-[575px] h-[398px] overflow-hidden">
                    <Image className='h-full w-full object-cover bg-no-repeat' source={GroupImg} alt='not found'/>
                </div>
                <div className="content_part flex flex-col gap-4 w-[561px] mt-[54px]">
                    <h6 className='label2 capitalize text-dark-blue font-medium'>Free Revision Rounds</h6>
                    <h3 className='heading3 capitalize w-[623px]'>{head1}</h3>
                    <Peragraph className='pera w-full' text={pera1}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureRevision