import React from 'react'
import Button from '../../../components/button/Button'
import { FaArrowRightLong } from 'react-icons/fa6'
import Image from '../../../components/Image'
import ViewFirst from '../../../assets/images/home/view_first.svg'
import ViewSecond from '../../../assets/images/home/view_third.svg'
import ViewThird from '../../../assets/images/home/view_second.svg'
import Peragraph from '../../../components/peragraph/Peragraph'
import './home.css'


const HomeView = () => {
    let pera1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
    // to use gradient more effeciently visit to this website and learn
    let GradientDrectionWeb ="https://blog.logrocket.com/guide-adding-gradients-tailwind-css/"
  return (
    <div className='py-section_padding'>
        <div className='w-container mx-auto my-0'>
          <div className="heading_section flex items-center justify-between">
            <h2 className='heading2'>View our projects</h2>
            <div>
                <Button className='Label1 flex items-center justify-center gap-5 text-black' text='view more' Children={<FaArrowRightLong />}/>
            </div>
          </div>
          <div className="view_item_section mt-16 flex gap-8 ">
            <div className="view_item1 w-[843px] h-[600px] overflow-hidden relative home_hover">
              <Image source={ViewFirst} className='image_style ' alt='not found'/>
              <div className='home_first_hover w-[396px] h-full absolute top-0 bg-gradient-to-t from-[#1c1e53d8] to-[#1c1e536d] pt-[256px] pb-[76px] pr-[48px] pl-[35px] flex flex-col gap-5  transition-all ease-linear duration-300'>
                <h6 className='text-sada text-2xl font-semibold leading-9 '>Workhub office Webflow Webflow Design</h6>
                <Peragraph className='pera text-pera' text={pera1}/>
                <div>
                    <Button className='Label1 text-yellow flex items-center justify-center gap-5 ' text='view project' Children={<FaArrowRightLong />}/>
                </div>
              </div>
            </div>
            <div className="view_item2 w-[405px] flex flex-col gap-8">
                <div className="item_child w-full h-[284px] relative item2_hover overflow-hidden">
                    <Image source={ViewSecond} className='image_style ' alt='not found'/>
                    <div className='h-full w-full absolute left-0 top-[296px] bg-gradient-to-t from-[#1c1e53d8] to-[#1c1e536d] flex flex-col gap-4 pt-[129px]  pl-[56px] pb-[45px] transition-all ease-linear duration-300 item2_now_hover'>
                        <h6 className='text-sada text-2xl font-semibold leading-9 w-[313px]'>
                            Unisaas Website Design
                        </h6>
                        <div>
                            <Button className='Label1 text-yellow flex items-center justify-center gap-5 ' text='view project' Children={<FaArrowRightLong />}/>
                        </div>
                    </div>
                </div>
                <div className="item_child w-full h-[284px] ">
                    <Image source={ViewThird} className='image_style ' alt='not found'/>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeView