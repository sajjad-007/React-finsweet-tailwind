import React from 'react'
import Image from '../../../components/Image'
import StartUpImg from '../../../assets/images/home/start_up.svg'
import Peragraph from '../../../components/headings/peragraph/Peragraph'
import InputField from '../../../components/inputfield/InputField'
import Button from '../../../components/button/Button'
import { FaArrowRightLong } from 'react-icons/fa6'

const HomeStartUp = () => {
  let pera1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
  return (
    <div className='py-section_padding'>
        <div className="w-container my-0 mx-auto">
            <div className="wrapper flex flex-wrap">
                <div className="part1 w-[640px] h-[675px] relative overflow-hidden ">
                    <Image source={StartUpImg} className='img_style bg-contain self-stretch' alt="not found"/>
                    <div className='h-full w-full bg-[#2829388f] absolute left-0 top-0 flex flex-col gap-6 px-24 pt-24 pb-64'>
                      <h1 className='heading1 w-[464px]'>Building stellar websites for early startups</h1>
                      <Peragraph className='pera text-sada' text={pera1}/>
                    </div>
                </div>
                <div className="part2 w-[640px] h-auto bg-primary flex flex-col px-24 pt-[92px]
                pb-[48px]">
                  <div className='w-[432px]'>
                    <div className='head_text flex flex-col gap-4'>
                      <h5 className='heading5 text-sada'>Send inquiry</h5>
                      <Peragraph className='pera text-sada' text={pera1}/>
                    </div>
                    <div className="form_part ">
                      <form>
                        <InputField/>
                        <Button className='nav_btn2 w-full mt-10 mb-7' type='submit' text="Send an Inquiry"/>
                      </form>
                      <div>
                        <Button className='Label1 text-sada flex items-center justify-center gap-5 ' text='Get in touch with us' Children={<FaArrowRightLong />}/>
                      </div>
                    </div>
                  </div>
                </div>
            </div>      
        </div>
    </div>
  )
}

export default HomeStartUp